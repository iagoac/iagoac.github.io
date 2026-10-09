import { Button } from "@/components/ui/button"
import { ArrowDownRight, Mail, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl border-y border-border py-10 md:py-14">
        <div className="grid items-center gap-10 md:grid-cols-[1.35fr_.65fr] md:gap-16">
          <div className="order-2 md:order-1">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Computer Science · UNIFAL-MG</p>
            <h1 className="heading-font max-w-3xl text-5xl font-semibold leading-[.96] tracking-[-0.045em] md:text-7xl lg:text-8xl">
              Iago Augusto<br /><span className="text-primary">Carvalho</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Professor and researcher working at the intersection of optimization, machine learning, and data science.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-12 px-6 text-sm rounded-none shadow-none group" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 text-sm rounded-none border-border bg-transparent hover:bg-muted group" asChild>
              <a href="#publications">
                <FileText className="h-4 w-4 mr-2" />
                View Publications
                <ArrowDownRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            </div>
          </div>
          <figure className="order-1 md:order-2 md:justify-self-end">
            <div className="relative aspect-[4/5] w-48 overflow-hidden border border-border bg-muted md:w-64">
              <img src="/iago.jpg" alt="Dr. Iago Augusto Carvalho" className="h-full w-full object-cover grayscale-[20%]" />
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">Alfenas, Brazil</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
