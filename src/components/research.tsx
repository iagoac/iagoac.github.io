import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Computer, Brain, BugPlay, ChartScatter, Sigma } from "lucide-react"

export function Research() {
  const researchAreas = [
    {
      icon: Sigma,
      title: "Mathematical programming",
      description: "Building and evaluating optimization models for complex problems",
      tags: ["Integer programming", "Linear programming", "Multi-objective optimization"],
    },
    {
      icon: BugPlay,
      title: "Heuristics and metaheuristics",
      description: "Development of approximate algorithms for large-scale optimization problems",
      tags: ["Genetic algorithms", "Math-heuristics", "Data structures for evolutionary algorithms"],
    },
    {
      icon: Brain,
      title: "Artificial intelligence",
      description: "Learning-based approaches for data-driven decision making",
      tags: ["Learning models", "Data imputation", "Data augmentation", "Generative AI"],
    },
    {
      icon: ChartScatter ,
      title: "Statistics and data science",
      description: "Techniques for the analyses, interpretation, and evaluation of complex datasets",
      tags: ["Data visualization", "Hypothesis testing", "Exploratory data analysis", "Design and analysis of experiments"],
    },
  ]

  return (
    <section id="research" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Computer className="h-4 w-4" />
            Research Areas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">My Research</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exploring innovative solutions to complex computational problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Current Projects</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <h4 className="font-medium text-foreground">Multi-objective minimum spanning trees</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Investigating efficient algorithms for solving multi-objective minimum spanning tree problems in large-scale networks.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <h4 className="font-medium text-foreground">Data imputation methods</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Developing and evaluating techniques for imputing missing data in large datasets to improve analysis accuracy.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <h4 className="font-medium text-foreground">Football data analysis</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Collecting and analyzing football transfer data to uncover trends and insights in the sports industry.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
