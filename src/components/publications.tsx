"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Calendar } from "lucide-react"
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
    <section id="publications" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <FileText className="h-4 w-4" />
            Academic Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Selected publications from my research work
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground flex-shrink-0">
                    <Calendar className="h-4 w-4" />
                    {pub.year}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-foreground text-balance">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">{pub.authors}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                        {pub.type}
                      </span>
                      <span className="text-muted-foreground italic">{pub.venue}</span>
                    </div>
                    {pub.doi && (
                      <>
                      {/* <span className="hidden sm:inline text-border">•</span> */}
                      <span className="text-muted-foreground font-mono text-xs">DOI: {pub.doi}</span>
                      </>
                    )}
                  </div>
                  {pub.link && (
                    <Button variant="outline" size="sm" asChild className="flex-shrink-0 bg-transparent">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <a href="/publications">
              View Full Publication List
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
