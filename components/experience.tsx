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
        "Developed and maintained 50+ REST APIs using MuleSoft for core banking products (e.g., transaction summaries, reward points, CVV delivery), serving millions of secure requests monthly.",
        "Led global workshops and API design reviews across UK, South-East Asia Mexico, and Canada teams to align backend interfaces and promote enterprise adoption.",
        "Automated CI/CD pipelines using Jenkins, Python, and Groovy, reducing deployment time by 30% and eliminating 4+ hours/week of manual overhead.",
        "Improved observability and incident diagnostics by building internal logging/reporting tools (Splunk, SonarQube), reducing time to resolution by 40%.",
        "Consistently upgraded legacy APIs to Silver-standard compliance, contributing to modernization of 200+ services.",
      ],
      technologies: ["MuleSoft", "Jenkins", "REST APIs", "Splunk", "SonarQube", "Java", "Groovy"],
      awards: ["HSBC Circle of Excellence Award (2020, 2021)"],
    },
    {
      title: "Lead Developer, zSASA (Z-Series Application for System Analysis)",
      company: "HSBC Software Development (India) Pvt. Ltd.",
      location: "India",
      duration: "Jul 2019 - Nov 2022 (Concurrent with Software Developer role)",
      description: [
        "Led the complete backend development of zSASA, an HSBC tool built entirely in Python, designed to analyze extensive batch flows and map interdependencies across 5000 COBOL programs, Copybooks, JCLs, VSAM Files, and SQL Databases.",
        "Optimized the system to provide cross-functional visibility and insights, improving batch flow analysis efficiency for HSBC's global business units. Enhanced processing accuracy and reduced manual intervention, making the tool a critical component for analyzing complex system dependencies and batch operations.",
      ],
      technologies: ["Python", "COBOL", "System Analysis", "SQL Databases", "Enterprise Architecture"],
      awards: [], // Awards are covered under the main Software Developer role
    },
    {
      title: "Student Consultant",
      company: "University of New Brunswick (Canada)",
      location: "Canada",
      duration: "Jan 2023 - May 2024",
      description: [
        "Provided Tier 2+ technical support for VPN, MFA, and device issues, maintaining 98.5% system uptime for staff and students.",
        "Led resolution of priority escalations and collaborated with internal IT teams for issue diagnosis and permanent fixes.",
        "Configured account-level access controls and advised on cybersecurity best practices, contributing to safer student computing environments.",
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
