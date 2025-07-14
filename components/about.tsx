import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference. I
            love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground mb-4">
              Started my journey in computer science with a passion for backend systems and API development. Over 4+
              years, I've worked with global fintech companies like HSBC, building enterprise-grade solutions that serve
              millions of users. My experience spans from developing secure REST APIs to automating CI/CD pipelines and
              leading cross-functional teams.
            </p>
            <p className="text-muted-foreground mb-4">
              During my Master's at University of New Brunswick, I expanded into distributed systems and NLP, building
              serverless data analytics platforms and machine learning pipelines. I'm passionate about creating
              scalable, secure backend systems that solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              I believe in writing clean, maintainable code and creating experiences that users love to interact with.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-blue-500 mr-3" />
                  <h4 className="text-xl font-semibold">Development</h4>
                </div>
                <p className="text-muted-foreground">
                  Backend systems, REST APIs, and full-stack development with modern frameworks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Palette className="h-8 w-8 text-purple-500 mr-3" />
                  <h4 className="text-xl font-semibold">Design</h4>
                </div>
                <p className="text-muted-foreground">
                  System architecture focused on scalability, security, and performance
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-500 mr-3" />
                  <h4 className="text-xl font-semibold">Performance</h4>
                </div>
                <p className="text-muted-foreground">
                  CI/CD automation, observability tools, and production optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
