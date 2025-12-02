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
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Get in Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Feel free to reach out for collaborations, research inquiries, or student opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">{item.label}</div>
                      {item.link ? (
                        <a href={item.link} className="text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Academic Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="outline" asChild className="h-auto py-4 flex-col gap-2 bg-transparent">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-5 w-5" />
                      <span className="text-sm">{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-primary text-primary-foreground">
          <CardContent className="p-6 md:p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
            <p className="mb-4 opacity-90">by appointment</p>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://calendly.com/iagoac" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4 mr-2" />
                Schedule a meeting
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
