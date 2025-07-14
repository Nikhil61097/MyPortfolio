import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "University of New Brunswick",
      location: "Canada",
      duration: "Jan 2023 - Oct 2024",
      gpa: "CGPA - 4.15/4.3",
      achievements: [],
    },
    {
      degree: "Bachelor of Technology - Computer Science",
      school: "University of Pune",
      location: "India",
      duration: "Jul 2015 - May 2019",
      gpa: "First Class with Honors",
      achievements: [],
    },
  ]

  const certifications = [
    "Orange, Yellow, White Belt Certification - Secure Code Warrior",
    "Microsoft Technology Associate - Microsoft",
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  <GraduationCap className="h-8 w-8 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{edu.duration}</p>
                <div className="flex items-center text-green-600 font-medium">
                  <Award className="h-4 w-4 mr-2" />
                  {edu.gpa}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Professional Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    <Award className="h-3 w-3 mr-1" />
                    CERT
                  </Badge>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
