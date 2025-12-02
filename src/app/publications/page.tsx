"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, ExternalLink, BookText, Search, Download, BookImage } from "lucide-react"
import { parseBibTeX, bibtexToPublication, publicationsToBibTeX, type Publication } from "@/lib/bibtex-parser"

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadPublications() {
      try {
        const response = await fetch("/publications.bib")
        const bibtexContent = await response.text()

        const entries = parseBibTeX(bibtexContent)
        const pubs = entries.map(bibtexToPublication)

        setPublications(pubs)
      } catch (error) {
        console.error("Failed to load publications:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPublications()
  }, [])

  const filteredPublications = useMemo(() => {
    if (!searchQuery.trim()) return publications

    const query = searchQuery.toLowerCase()
    return publications.filter(
      (pub) =>
        pub.title.toLowerCase().includes(query) ||
        pub.authors.toLowerCase().includes(query) ||
        pub.venue.toLowerCase().includes(query) ||
        pub.year.includes(query),
    )
  }, [publications, searchQuery])

  const publicationsByYear = useMemo(() => {
    const grouped: Record<string, Publication[]> = {}
    filteredPublications.forEach((pub) => {
      if (!grouped[pub.year]) {
        grouped[pub.year] = []
      }
      grouped[pub.year].push(pub)
    })
    return grouped
  }, [filteredPublications])

  const totalPublications = publications.length

  const handleExportBibTeX = () => {
    const bibtex = publicationsToBibTeX(filteredPublications)
    const blob = new Blob([bibtex], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "publications.bib"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleExportSingleBibTeX = (pub: Publication) => {
    const bibtex = publicationsToBibTeX([pub])
    const blob = new Blob([bibtex], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${pub.bibtexKey || "publication"}.bib`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading publications...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <FileText className="h-4 w-4" />
                Academic Publications
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Full Publication List
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                Complete collection of my research publications, including journal articles, conference papers, and book
                chapters
              </p>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                The PDF files of my publications are available for download in my <a href="https://www.researchgate.net/profile/Iago-Carvalho" target="_blank" rel="noopener noreferrer"><span className="text-foreground font-medium">ResearchGate profile</span></a>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{totalPublications} Total Publications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span>{Object.keys(publicationsByYear).length} Years</span>
                </div>
                {searchQuery && (
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary/60"></div>
                    <span>{filteredPublications.length} Matching Results</span>
                  </div>
                )}
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search publications by title, author, or venue..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex-shrink-0 bg-transparent" onClick={handleExportBibTeX}>
                <Download className="h-4 w-4 mr-2" />
                Export BibTeX
              </Button>
            </div>
          </div>
        </section>

        {/* Publications by Year */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {Object.keys(publicationsByYear).length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">No publications found matching your search.</p>
              </div>
            ) : (
              Object.entries(publicationsByYear)
                .sort(([yearA], [yearB]) => Number.parseInt(yearB) - Number.parseInt(yearA))
                .map(([year, pubs]) => (
                  <div key={year} className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{year}</h2>
                      <div className="h-px flex-1 bg-border"></div>
                      <span className="text-sm text-muted-foreground">
                        {pubs.length} {pubs.length === 1 ? "publication" : "publications"}
                      </span>
                    </div>

                    <div className="space-y-6">
                      {pubs.map((pub, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all hover:border-primary/20">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 space-y-2">
                                  <h3 className="text-lg font-semibold text-foreground leading-relaxed text-balance">
                                    {pub.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                                </div>
                                <span className="flex-shrink-0 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                                  {pub.type}
                                </span>
                              </div>

                              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  {pub.type === 'Journal Article' ? <BookText className="h-4 w-4" /> : <BookImage className="h-4 w-4" />}
                                  <span className="italic">{pub.venue}</span>
                                </div>
                                {pub.doi && (
                                  <>
                                    <span className="hidden sm:inline text-border">•</span>
                                    <span className="text-muted-foreground font-mono text-xs">DOI: {pub.doi}</span>
                                  </>
                                )}
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {pub.link && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-3 w-3 mr-2" />
                                      View Paper
                                    </a>
                                  </Button>
                                )}
                                <Button variant="ghost" size="sm" onClick={() => handleExportSingleBibTeX(pub)}>
                                  <FileText className="h-3 w-3 mr-2" />
                                  BibTeX
                                </Button>
                                {/* {pub.link && (
                                  <Button variant="ghost" size="sm" asChild>
                                    <a href={pub.link} download>
                                      <Download className="h-3 w-3 mr-2" />
                                      PDF
                                    </a>
                                  </Button>
                                )} */}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{totalPublications}</div>
                  <div className="text-sm text-muted-foreground">Total Publications</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {publications.filter((p) => p.type === "Journal Article").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Journal Articles</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {publications.filter((p) => p.type === "Conference Paper").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Conference Papers</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
