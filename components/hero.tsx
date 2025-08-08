import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-blue-600 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">Nikhil</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Chhadikar
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                A backend-driven software engineer who transforms complex business challenges into scalable technical
                solutions. Combining enterprise API development with distributed systems architecture to create robust,
                efficient systems that scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact" className="flex items-center">
                  Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex space-x-6">
              <Link
                href="https://github.com/Nikhil61097"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nikhil-chhadikar-a60487154/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:nchhadikar@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Large Photo */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/nikhil-graduation.jpg"
                  alt="Nikhil Chhadikar"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <Link
            href="#about"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
