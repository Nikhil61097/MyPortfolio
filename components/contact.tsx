"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I'm always open to discussing backend development opportunities, API architecture, or interesting
              technical challenges in fintech and distributed systems.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3" />
                <Link href="mailto:nchhadikar@gmail.com" className="hover:underline">
                  nchhadikar@gmail.com
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3" />
                <span>+353 899 871 672</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                <span>Dublin, Ireland</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-6 mt-8">
            <Link
              href="https://www.linkedin.com/in/nikhil-chhadikar-a60487154/"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Nikhil61097"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
