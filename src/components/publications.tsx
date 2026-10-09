"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Calendar, BookMarked } from "lucide-react"
import { parseBibTeX, bibtexToPublication, type Publication } from "@/lib/bibtex-parser"

export function Publications() {
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    async function loadPublications() {
      try {
        const response = await fetch("/publications.bib")
        const bibtexContent = await response.text()

        const entries = parseBibTeX(bibtexContent)
        const pubs = entries.map(bibtexToPublication)

        // Sort by year descending and take first 4
        const sorted = pubs.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
        setPublications(sorted.slice(0, 4))
      } catch (error) {
        console.error("Failed to load publications:", error)
      }
    }

    loadPublications()
  }, [])

  if (publications.length === 0) {
    return null
  }

  return (
    <section id="publications" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-gradient">Selected</span> Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Highlighting recent and significant contributions to the field
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="group relative">
              <div className="relative glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-start gap-6 border-l-4 border-l-primary hover:border-l-blue-500 transition-colors">
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 flex-shrink-0 md:mt-1 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  <Calendar className="h-4 w-4" />
                  {pub.year}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-foreground text-balance group-hover:text-primary transition-colors">{pub.title}</h3>
                  <p className="text-base text-muted-foreground/90 font-light leading-relaxed">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm pt-2">
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                      {pub.type}
                    </span>
                    <span className="text-muted-foreground italic font-light">{pub.venue}</span>
                  </div>
                  {pub.doi && (
                    <div className="text-muted-foreground/70 font-mono text-xs pt-1">
                      DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">{pub.doi}</a>
                    </div>
                  )}
                </div>
                {pub.link && (
                  <Button variant="outline" size="sm" asChild className="flex-shrink-0 bg-transparent border-primary/30 hover:bg-primary/10 rounded-full">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Paper
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button variant="outline" size="lg" className="rounded-full border-primary/30 hover:bg-primary/10 glass px-8" asChild>
            <a href="/publications">
              View All Publications
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
