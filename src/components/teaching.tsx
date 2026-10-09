import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Users, Award, ExternalLink } from "lucide-react"

export function Teaching() {
  const courses = [
    {
      code: "DCE770",
      name: "Heuristics and Metaheuristics",
      level: "Undergraduate",
      semester: "2026-2",
      link: "https://github.com/iagoac/dce770",
    },
    {
      code: "DCE792",
      name: "Laboratory of Data Structures and Algorithms",
      level: "Undergraduate",
      semester: "2026-2",
      link: "https://github.com/iagoac/dce792",
    },
    {
      code: "DCE797",
      name: "Project and Analysis of Algorithms",
      level: "Undergraduate",
      semester: "2026-1",
      link: "https://github.com/iagoac/dce797",
    },
    {
      code: "EAB067",
      name: "Machine Learning",
      level: "Graduate",
      semester: "2026-1",
      link: "https://github.com/iagoac/eab067",
    },
  ]

  const stats = [
    { icon: BookOpen, value: "10+", label: "Courses taught" },
    { icon: Users, value: "20+", label: "Students mentored" },
    { icon: GraduationCap, value: "10+", label: "Thesis supervised" },
    // { icon: Award, value: "2", label: "Research awards" },
  ]

  return (
    <section id="teaching" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6 text-balance">
            Academic <span className="text-gradient">Teaching</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Courses and student mentorship at UNIFAL-MG
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-8 text-center rounded-3xl group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 font-mono group-hover:text-primary transition-colors">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="heading-font text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
            <span className="w-8 h-px bg-primary mr-4"></span>
            Current Courses
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="group relative">
                <div className="relative glass-card h-full p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-primary/50 transition-colors">
                  <div className="mb-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="text-sm font-mono text-primary font-semibold tracking-wider">{course.code}</div>
                      <Badge variant="secondary" className="bg-background/50 border border-border text-xs font-normal px-2.5 py-0.5">
                        {course.level}
                      </Badge>
                    </div>
                    <h4 className="text-xl font-bold text-foreground text-balance group-hover:text-primary transition-colors leading-tight">{course.name}</h4>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    {/* <p className="text-sm text-muted-foreground font-medium flex items-center gap-2"> */}
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {course.semester}
                    {/* </p> */}
                    {course.link && (
                      <Button variant="outline" size="sm" asChild className="flex-shrink-0 bg-transparent border-primary/30 hover:bg-primary/10 rounded-full h-8">
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-2" />
                          View Course
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group max-w-4xl mx-auto">
          <div className="relative glass-card p-8 md:p-10 rounded-3xl border border-primary/20">
            <h3 className="heading-font text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-10 h-px bg-primary mr-4"></span>
              Student Opportunities
            </h3>
            <div className="space-y-4 text-muted-foreground/90 leading-relaxed text-lg font-light">
              <p>
                I am always looking for motivated students to join my research group. If you are interested in pursuing
                research in one of my research areas, please feel free to reach out.
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Available positions for:
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Ph.D. students', "Master's students", 'Scientific initiation (PIBIC)'].map((pos, i) => (
                    <div key={i} className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {pos}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
