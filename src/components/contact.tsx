import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Building, Github, Linkedin, BookOpen, TextSelect, IdCard, UserRoundPen } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iago.carvalho@unifal-mg.edu.br",
      link: "mailto:iago.carvalho@unifal-mg.edu.br",
    },
    {
      icon: Building,
      label: "Office",
      value: "Room 301-F, Block C",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Av. Jovino Fernandes de Sales, 2600 - Santa Clara, Alfenas - MG, 37133-840",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/iagoac",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/iagoacarvalho",
    },
    {
      icon: BookOpen,
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=md-lqLIAAAAJ",
    },
    {
      icon: UserRoundPen,
      label: "ResearchGate",
      url: "https://www.researchgate.net/profile/Iago-Carvalho",
    },
    {
      icon: IdCard,
      label: "ORCID",
      url: "https://orcid.org/0000-0001-9404-1329",
    },
    {
      icon: TextSelect,
      label: "Lattes CV",
      url: "http://lattes.cnpq.br/9975041225831602",
    }
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10 -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6 text-balance">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Feel free to reach out for collaborations, research inquiries, or student opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
            <div className="relative glass-card h-full p-8 rounded-2xl">
              <h3 className="heading-font text-2xl font-bold text-foreground mb-8 flex items-center">
                <span className="w-6 h-1 bg-primary mr-4 rounded-full"></span>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                      {item.link ? (
                        <a href={item.link} className="text-foreground hover:text-primary transition-colors text-base font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-foreground text-base font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-l from-primary/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
            <div className="relative glass-card h-full p-8 rounded-2xl">
              <h3 className="heading-font text-2xl font-bold text-foreground mb-8 flex items-center">
                <span className="w-6 h-1 bg-purple-500 mr-4 rounded-full"></span>
                Academic Profiles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="outline" asChild className="h-auto py-6 flex-col gap-3 bg-background/30 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all group/btn rounded-xl">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-6 w-6 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
          <div className="relative glass-card p-10 md:p-12 text-center rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 pointer-events-none" />
            <h3 className="heading-font text-3xl font-bold mb-4 text-foreground relative z-10">Office Hours</h3>
            <p className="mb-8 text-lg text-muted-foreground font-light relative z-10">Available by appointment for detailed discussions.</p>
            <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all relative z-10 hover:scale-105" asChild>
              <a href="https://calendar.app.google/QHUECcVm7A7CbM6aA" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5 mr-3 animate-pulse" />
                Schedule a meeting
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
