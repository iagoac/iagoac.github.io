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
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate educator and researcher dedicated to advancing computer science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Background</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
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
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold text-foreground">Ph.D. in Computer Science</div>
                  <div className="text-sm text-muted-foreground">Universidade Federal de Minas Gerais, 2020</div>
                  <div className="text-sm text-muted-foreground mt-1">Thesis: The Minmax regret 0-1 Integer Linear Programming Problem under Interval Uncertainty: Complexity and Heuristics</div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold text-foreground">M.Sc. in Computer Science</div>
                  <div className="text-sm text-muted-foreground">Universidade Federal de Minas Gerais, 2016</div>
                  <div className="text-sm text-muted-foreground mt-1">Thesis: The Robust Shortest Path Tree: formulations and algorithms</div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold text-foreground">B.Sc. in Computer Science</div>
                  <div className="text-sm text-muted-foreground">Universidade Federal de São João del Rei, 2014</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
