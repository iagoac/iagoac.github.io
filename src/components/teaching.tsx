import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard } from "@radix-ui/react-hover-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Users, Award, ExternalLink } from "lucide-react"

export function Teaching() {
  const courses = [
    {
      code: "DCE797",
      name: "Project and analysis of algorithms",
      level: "Undergraduate",
      semester: "2025-2",
      link: "https://github.com/iagoac/dce797",
    },
    {
      code: "EAB067",
      name: "Machine learning",
      level: "Graduate",
      semester: "2025-2",
      link: "https://github.com/iagoac/eab067",
    },
    {
      code: "DCE770",
      name: "Heuristics and metaheuristics",
      level: "Undergraduate",
      semester: "2025-1",
      link: "https://github.com/iagoac/dce770",
    },
    {
      code: "DCE792",
      name: "Laboratory of data Structures and algorithms",
      level: "Undergraduate",
      semester: "2025-1",
      link: "https://github.com/iagoac/dce792",
    },
    
  ]

  const stats = [
    { icon: BookOpen, value: "10+", label: "Courses taught" },
    { icon: Users, value: "20+", label: "Students mentored" },
    { icon: GraduationCap, value: "10+", label: "Thesis supervised" },
    // { icon: Award, value: "2", label: "Research awards" },
  ]

  return (
    <section id="teaching" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <GraduationCap className="h-4 w-4" />
            Education
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Teaching</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Courses and student mentorship at UNIFAL-MG
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6">Current Courses</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-mono text-accent mb-1">{course.code}</div>
                      <CardTitle className="text-lg text-balance">{course.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{course.semester}</p>
                  {course.link && (
                    <Button variant="outline" size="sm" asChild className="flex-shrink-0 bg-transparent">
                      <a href={course.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View course
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Student Opportunities</h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                I am always looking for motivated students to join my research group. If you are interested in pursuing
                research in one of my research areas, please feel free to reach out.
              </p>
              <p className="font-medium text-foreground">Available positions for:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Ph.D. students</li>
                <li>Master's students</li>
                <li>Scientific initiation (PIBIC) projects</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
