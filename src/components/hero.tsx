import { Button } from "@/components/ui/button"
import { Binary, Mail, FileText, ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium backdrop-blur-md shadow-lg shadow-primary/5 transition-transform hover:scale-105">
            <Binary className="h-4 w-4" />
            <span>Computer Science Researcher & Professor</span>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />
            <div className="relative rounded-full border-4 border-background overflow-hidden mx-auto w-40 h-40 md:w-48 md:h-48 shadow-2xl">
              <img src="/iago.jpg" alt="Dr. Iago Augusto Carvalho" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="heading-font text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              Dr. <span className="text-gradient">Iago Augusto</span> Carvalho
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl text-pretty leading-relaxed font-light">
            Department of Computer Science at{" "}
            <span className="text-foreground font-medium drop-shadow-sm">Universidade Federal de Alfenas</span>
          </p>

          <p className="text-base md:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed">
            Computer and data scientist passionate for developing interdisciplinary projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group" asChild>
              <a href="#contact">
                <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-primary/30 hover:bg-primary/5 transition-all group glass" asChild>
              <a href="#publications">
                <FileText className="h-5 w-5 mr-2" />
                View Publications
                <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
