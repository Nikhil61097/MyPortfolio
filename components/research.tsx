import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, Award } from "lucide-react"
import Link from "next/link"

export function Research() {
  const publications = [
    {
      title: "Image Processing Based Tracking and Counting Vehicles",
      journal: "International Journal",
      year: "2019",
      description:
        "Developed an advanced computer vision system for real-time vehicle tracking and counting using image processing techniques. The research focused on improving traffic monitoring systems through automated vehicle detection and classification algorithms.",
      technologies: ["Computer Vision", "Image Processing", "Python", "OpenCV", "Machine Learning"],
      researchgateUrl:
        "https://www.researchgate.net/publication/335580927_Image_processing_based_Tracking_and_Counting_Vehicles",
      type: "Computer Vision & Traffic Systems",
    },
    {
      title: "Effective Sorting Using Parallel Computing",
      journal: "International Journal",
      year: "2019",
      description:
        "Investigated and implemented parallel computing approaches to optimize sorting algorithms. The research demonstrated significant performance improvements in large-scale data sorting through distributed computing techniques and parallel processing methodologies.",
      technologies: ["Parallel Computing", "Algorithm Optimization", "Distributed Systems", "Performance Analysis"],
      academiaUrl: "https://www.academia.edu/40443746/Effective_Sorting_Using_Parallel_Computing",
      type: "Parallel Computing & Algorithms",
    },
  ]

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Research Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Published research in international journals during undergraduate studies, demonstrating expertise in
            computer vision and parallel computing
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {publications.map((publication, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-yellow-500 mr-2" />
                      <Badge variant="secondary">{publication.type}</Badge>
                      <Badge variant="outline" className="ml-2">
                        {publication.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{publication.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-blue-600 mb-3">
                      Published in {publication.journal}
                    </CardDescription>
                  </div>
                  <FileText className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{publication.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {publication.researchgateUrl && (
                    <Button size="sm" asChild>
                      <Link href={publication.researchgateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        ResearchGate
                      </Link>
                    </Button>
                  )}
                  {publication.academiaUrl && (
                    <Button size="sm" asChild>
                      <Link href={publication.academiaUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Academia.edu
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
            <Award className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">2 International Journal Publications</span>
          </div>
        </div>
      </div>
    </section>
  )
}
