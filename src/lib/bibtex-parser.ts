export interface BibTeXEntry {
  key: string
  type: string
  fields: Record<string, string>
}

export interface Publication {
  year: string
  title: string
  authors: string
  venue: string
  type: "Conference Paper" | "Journal Article" | "Book Chapter" | "Workshop Paper" | "Other"
  link?: string
  doi?: string
  bibtexKey?: string
}

export function parseBibTeX(bibtexString: string): BibTeXEntry[] {
  const entries: BibTeXEntry[] = []

  // Match @type{key, ... }
  const entryRegex = /@(\w+)\s*\{\s*([^,\s]+)\s*,([^@]*?)(?=\n\s*\})/gs

  let match
  while ((match = entryRegex.exec(bibtexString)) !== null) {
    const [, type, key, fieldsStr] = match

    const fields: Record<string, string> = {}

    // Match field = {value} or field = "value"
    const fieldRegex = /(\w+)\s*=\s*[{"](.*?)["}}]\s*,?/gs

    let fieldMatch
    while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
      const [, fieldName, fieldValue] = fieldMatch
      fields[fieldName.toLowerCase()] = fieldValue.trim()
    }

    entries.push({
      key,
      type: type.toLowerCase(),
      fields,
    })
  }

  return entries
}

export function bibtexToPublication(entry: BibTeXEntry): Publication {
  const fields = entry.fields

  // Determine publication type
  let pubType: Publication["type"] = "Other"
  switch (entry.type) {
    case "article":
      pubType = "Journal Article"
      break
    case "inproceedings":
    case "conference":
      pubType = "Conference Paper"
      break
    case "inbook":
    case "incollection":
      pubType = "Book Chapter"
      break
    case "workshop":
      pubType = "Workshop Paper"
      break
  }

  // Extract year
  const year = fields.year || "Unknown"

  // Extract title
  const title = fields.title || "Untitled"

  // Extract and format authors
  let authors = fields.author || "Unknown"
  // Replace " and " with ", " for display
  authors = authors.replace(/ and /g, ", ")

  // Extract venue
  const venue = fields.booktitle || fields.journal || fields.publisher || "Unknown Venue"

  // Extract DOI
  const doi = fields.doi

  // Extract URL
  const link = fields.url || (doi ? `https://doi.org/${doi}` : undefined)

  return {
    year,
    title,
    authors,
    venue,
    type: pubType,
    link,
    doi,
    bibtexKey: entry.key,
  }
}

export function publicationsToBibTeX(publications: Publication[]): string {
  return publications
    .map((pub) => {
      const key =
        pub.bibtexKey ||
        pub.title
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "")
          .substring(0, 20) + pub.year
      const type = pub.type === "Journal Article" ? "article" : "inproceedings"

      let bibtex = `@${type}{${key},\n`
      bibtex += `  title = {${pub.title}},\n`
      bibtex += `  author = {${pub.authors.replace(/, /g, " and ")}},\n`

      if (pub.type === "Journal Article") {
        bibtex += `  journal = {${pub.venue}},\n`
      } else {
        bibtex += `  booktitle = {${pub.venue}},\n`
      }

      bibtex += `  year = {${pub.year}},\n`

      if (pub.doi) {
        bibtex += `  doi = {${pub.doi}},\n`
      }

      if (pub.link) {
        bibtex += `  url = {${pub.link}},\n`
      }

      bibtex += `}\n`

      return bibtex
    })
    .join("\n")
}
