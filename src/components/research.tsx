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
    <section id="research" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10 translate-y-1/4" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md">
            <Computer className="h-4 w-4" />
            Research Areas
          </div>
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6 text-balance">
            My <span className="text-gradient">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Exploring innovative solutions to complex computational problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
              <div className="relative glass-card h-full p-6 md:p-8 rounded-2xl flex flex-col">
                <div className="flex items-start gap-5 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <area.icon className="h-7 w-7 text-primary group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-font text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-base text-muted-foreground/90 font-light leading-relaxed">{area.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                  {area.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-background/50 hover:bg-primary/20 hover:text-primary border border-border transition-colors font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 group relative max-w-4xl mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative glass-card p-8 md:p-10 rounded-3xl border border-primary/20">
            <h3 className="heading-font text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
              <span className="w-10 h-1 bg-gradient-to-r from-primary to-purple-500 mr-4 rounded-full"></span>
              Current Projects
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group/item">
                <div className="h-3 w-3 rounded-full bg-primary flex-shrink-0 mt-2 shadow-[0_0_10px_rgba(var(--primary),0.8)] group-hover/item:scale-125 transition-transform" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1 group-hover/item:text-primary transition-colors">Multi-objective minimum spanning trees</h4>
                  <p className="text-base text-muted-foreground/90 font-light leading-relaxed">
                    Investigating efficient algorithms for solving multi-objective minimum spanning tree problems in large-scale networks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group/item">
                <div className="h-3 w-3 rounded-full bg-blue-400 flex-shrink-0 mt-2 shadow-[0_0_10px_rgba(96,165,250,0.8)] group-hover/item:scale-125 transition-transform" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1 group-hover/item:text-blue-400 transition-colors">Data imputation methods</h4>
                  <p className="text-base text-muted-foreground/90 font-light leading-relaxed">
                    Developing and evaluating techniques for imputing missing data in large datasets to improve analysis accuracy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group/item">
                <div className="h-3 w-3 rounded-full bg-purple-500 flex-shrink-0 mt-2 shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover/item:scale-125 transition-transform" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1 group-hover/item:text-purple-400 transition-colors">Football data analysis</h4>
                  <p className="text-base text-muted-foreground/90 font-light leading-relaxed">
                    Collecting and analyzing football transfer data to uncover trends and insights in the sports industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
