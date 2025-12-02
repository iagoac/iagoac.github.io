import { Button } from "@/components/ui/button"
import { Binary, Mail, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Binary className="h-4 w-4" />
            Computer science researcher and professor
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">Dr. Iago Augusto Carvalho</h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            Department of Computer Science at{" "}
            <span className="text-foreground font-medium">Universidade Federal de Alfenas</span>
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Computer and data scientist passionate for developing interdisciplinary projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#publications">
                <FileText className="h-4 w-4 mr-2" />
                View Publications
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
