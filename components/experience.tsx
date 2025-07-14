import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Award } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "HSBC Software Development (India) Pvt. Ltd.",
      location: "India",
      duration: "Jul 2019 - Nov 2022",
      description: [
        "Developed and maintained 50+ REST APIs using MuleSoft for core banking products, serving millions of secure requests monthly",
        "Led global workshops and API design reviews across UK, South-East Asia, Mexico, and Canada teams",
        "Automated CI/CD pipelines using Jenkins, Python, and Groovy, reducing deployment time by 30%",
        "Improved observability and incident diagnostics by building internal logging/reporting tools, reducing time to resolution by 40%",
        "Led complete backend development of zSASA, analyzing 5000+ COBOL programs and mapping interdependencies",
      ],
      technologies: ["Python", "MuleSoft", "Jenkins", "REST APIs", "COBOL", "Splunk", "SonarQube"],
      awards: ["HSBC Circle of Excellence Award (2020, 2021)"],
    },
    {
      title: "Student Consultant",
      company: "University of New Brunswick",
      location: "Canada",
      duration: "Jan 2023 - May 2024",
      description: [
        "Provided Tier 2+ technical support for VPN, MFA, and device issues, maintaining 98.5% system uptime",
        "Led resolution of priority escalations and collaborated with internal IT teams",
        "Configured account-level access controls and advised on cybersecurity best practices",
      ],
      technologies: ["VPN", "MFA", "Cybersecurity", "System Administration"],
      awards: [],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4+ years of experience building enterprise-grade backend systems and APIs
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-muted-foreground mb-1">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {exp.awards.length > 0 && (
                  <div className="flex items-center text-yellow-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="font-medium">{exp.awards.join(", ")}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
