import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nikhil Chhadikar</h3>
            <p className="text-muted-foreground mb-4">
              Backend Developer passionate about building scalable APIs and distributed systems.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Nikhil61097"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/nikhilchhadikar"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:nchhadikar@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="#home" className="block text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Backend Development</li>
              <li>API Design</li>
              <li>System Architecture</li>
              <li>DevOps & CI/CD</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Nikhil Chhadikar © 2024
          </p>
        </div>
      </div>
    </footer>
  )
}
