import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Lightbulb } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Ph.D. in Computer Science with focus on optimization and data science",
    },
    {
      icon: BookOpen,
      title: "Research Focus",
      description: "Active research in interdisciplinary projects with international publications",
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Supervising graduate and undergraduate students in various projects",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Developing practical solutions to real-world computing challenges",
    },
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background flare */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Passionate educator and researcher dedicated to advancing computer science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <div className="relative glass-card h-full p-8 rounded-2xl">
              <h3 className="heading-font text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
                Background
              </h3>
              <div className="space-y-4 text-muted-foreground/90 leading-relaxed text-lg font-light">
                <p>
                  I am a Computer Science Professor at Universidade Federal de Alfenas (UNIFAL-MG), where I teach both
                  undergraduate and graduate courses.
                </p>
                <p>
                  My research interests are very broad and include optimization, machine learning, computational intelligence, statistics, and data science, among other areas.
                </p>
                <p>
                  I received my Ph.D. in Computer Science from Universidade Federal de Minas Gerais (UFMG) in 2020, and have been actively
                  involved in research and teaching since then.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-l from-primary to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <div className="relative glass-card h-full p-8 rounded-2xl">
              <h3 className="heading-font text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-8 h-1 bg-purple-500 mr-4 rounded-full"></span>
                Education
              </h3>
              <div className="space-y-6">
                <div className="relative border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                  <div className="font-semibold text-lg text-foreground">Ph.D. in Computer Science</div>
                  <div className="text-sm text-primary font-medium mb-1">Universidade Federal de Minas Gerais, 2020</div>
                  <div className="text-sm text-muted-foreground">Thesis: The Minmax regret 0-1 Integer Linear Programming Problem under Interval Uncertainty: Complexity and Heuristics</div>
                </div>
                <div className="relative border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
                  <div className="absolute w-3 h-3 bg-primary/50 rounded-full -left-[7px] top-1.5" />
                  <div className="font-semibold text-lg text-foreground">M.Sc. in Computer Science</div>
                  <div className="text-sm text-primary font-medium mb-1">Universidade Federal de Minas Gerais, 2016</div>
                  <div className="text-sm text-muted-foreground">Thesis: The Robust Shortest Path Tree: formulations and algorithms</div>
                </div>
                <div className="relative border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
                  <div className="absolute w-3 h-3 bg-primary/50 rounded-full -left-[7px] top-1.5" />
                  <div className="font-semibold text-lg text-foreground">B.Sc. in Computer Science</div>
                  <div className="text-sm text-primary font-medium mb-1">Universidade Federal de São João del Rei, 2014</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <item.icon className="h-8 w-8 text-primary group-hover:text-purple-400 transition-colors" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
