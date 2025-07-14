import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react" // Removed ExternalLink as it's no longer needed
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Distributed Serverless Spatial Query Processing",
      description:
        "Architected a serverless data analytics system using Python Dask on AWS, enabling scalable spatial query processing over distributed clusters with REST APIs and Dockerized JupyterHub.",
      image: "/images/daskdb-project.png",
      technologies: ["Python", "Dask", "AWS EC2/S3", "REST API", "Docker"],
      githubUrl: "https://github.com/Nikhil61097/DaskDBDSSSQL",
      category: "Distributed Systems",
    },
    {
      title: "Movie Genres Classification",
      description:
        "Built a multi-label classification model for movie genres using BERT, TF-IDF, and Word2Vec. Compared SVM, Logistic Regression, and transformer-based pipelines with Streamlit UI.",
      image: "/images/movie-classification.png",
      technologies: ["Python", "BERT", "NLP", "Scikit-learn", "Streamlit"],
      githubUrl: "https://github.com/Nikhil61097/Movie-Genre-Classification",
      category: "Machine Learning",
    },
    {
      title: "Restaurant Reservation System",
      description:
        "Designed a secure, role-based full-stack reservation app using Flask and Vue.js with LDAP authentication, encrypted session handling and admin dashboards.",
      image: "/images/restaurant-reservation.jpg",
      technologies: ["Flask", "Vue.js", "MySQL", "LDAP", "Docker"],
      githubUrl: "https://github.com/Nikhil61097/Ichirakus---Restaurant-Reservation-System-",
      category: "Full-Stack Development",
    },
    {
      title: "Django Task Manager",
      description:
        "A simple multi-user task management web application built with Django and Django REST Framework, featuring role-based access control and a user-friendly dashboard.",
      image: "/images/task-manager.png",
      technologies: ["Python", "Django", "Django REST Framework", "SQLite", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Nikhil61097/Django_taskmaster",
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
                  <Button variant="outline" size="sm" asChild className="group bg-transparent">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 text-muted-foreground group-hover:text-blue-600 transition-colors" />
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
