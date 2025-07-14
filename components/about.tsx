import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with 4+ years of experience creating digital solutions that make a difference. I
            love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground mb-4">
              I'm a <strong>Backend Developer</strong> and <strong>Full-Stack Engineer</strong> based in{" "}
              <strong>Dublin, Ireland</strong>, with a deep focus on APIs and platform engineering. Over the past 4+
              years, I’ve helped global fintech leaders like HSBC design and build enterprise-grade systems used by
              millions. From developing secure REST APIs to streamlining CI/CD pipelines and leading cross-functional
              teams — I turn complex challenges into scalable, robust solutions.
            </p>
            <p className="text-muted-foreground mb-4">
              While pursuing my Master’s in Computer Science at the University of New Brunswick, I dove deeper into
              distributed systems and natural language processing, building everything from serverless data analytics
              platforms to machine learning pipelines.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether I’m working on cloud-native infrastructure or fine-tuning backend performance, I’m driven by a
              single goal: to craft systems that are scalable, secure, and built to last. I believe in writing clean,
              maintainable code and creating developer experiences that are both powerful and elegant.
            </p>
            <Button asChild>
              <Link href="resume.pdf" download="Nikhil_Chhadikar_Resume.pdf">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
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
