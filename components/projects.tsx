import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "zSASA - Z-Series Application for System Analysis",
      description:
        "Led complete backend development of HSBC's patented batch analysis tool built in Python, analyzing 5000+ COBOL programs and mapping interdependencies across mainframe systems.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "COBOL", "System Analysis", "Enterprise Architecture"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Enterprise Software",
    },
    {
      title: "Distributed Serverless Spatial Query Processing",
      description:
        "Architected a serverless data analytics system using Python Dask on AWS, enabling scalable spatial query processing over distributed clusters with REST APIs and Dockerized JupyterHub.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Dask", "AWS EC2/S3", "REST API", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Nikhil61097/DaskDB",
      category: "Distributed Systems",
    },
    {
      title: "Movie Genres Classification",
      description:
        "Built a multi-label classification model for movie genres using BERT, TF-IDF, and Word2Vec. Compared SVM, Logistic Regression, and transformer-based pipelines with Streamlit UI.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "BERT", "NLP", "Scikit-learn", "Streamlit"],
      liveUrl: "#",
      githubUrl: "https://github.com/Nikhil61097/MGC",
      category: "Machine Learning",
    },
    {
      title: "Restaurant Reservation System",
      description:
        "Designed a secure, role-based full-stack reservation app using Flask and Vue.js with LDAP authentication, encrypted session handling, and admin dashboards.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Flask", "Vue.js", "MySQL", "LDAP", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Nikhil61097/RRS",
      category: "Full-Stack Development",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Development Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent development projects that showcase my technical skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
