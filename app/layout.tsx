import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nikhil Chhadikar - Portfolio",
  description:
    "Nikhil Chhadikar's professional portfolio showcasing backend development, API, and distributed systems expertise. Experienced in Python, Node.js, Flask, Django, React, Docker, CI/CD, and cloud-native development.",
  keywords: [
    "Nikhil Chhadikar",
    "Backend Developer",
    "Full-Stack Engineer",
    "API Specialist",
    "Platform Specialist",
    "Python",
    "Node.js",
    "Flask",
    "Django",
    "React",
    "Vue.js",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "AWS",
    "Distributed Systems",
    "Fintech",
    "Software Engineer",
    "REST APIs",
    "NLP",
    "Machine Learning",
  ],
  openGraph: {
    title: "Nikhil Chhadikar - Portfolio",
    description:
      "Nikhil Chhadikar's professional portfolio showcasing backend development, API, and distributed systems expertise.",
    url: "https://your-portfolio-url.vercel.app", // Replace with your actual deployed URL
    siteName: "Nikhil Chhadikar Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.vercel.app/images/nikhil-graduation.jpg", // Replace with your actual deployed image URL
        width: 800,
        height: 600,
        alt: "Nikhil Chhadikar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Chhadikar - Portfolio",
    description:
      "Nikhil Chhadikar's professional portfolio showcasing backend development, API, and distributed systems expertise.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle if you have one
    images: ["https://your-portfolio-url.vercel.app/images/nikhil-graduation.jpg"], // Replace with your actual deployed image URL
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
