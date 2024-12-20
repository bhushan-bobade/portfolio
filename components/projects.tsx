'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'AI Trip Planner',
    description: 'An AI-powered travel planning application that generates personalized day-by-day itineraries.',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'OpenAI API'],
    github: 'https://github.com/bhushan-bobade/Ai-Trip-Planner-App',
  },
  {
    title: 'Document Tracking System',
    description: 'A comprehensive Document Tracking System using the MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Multer'],
    github: 'https://github.com/bhushan-bobade',
  },
  {
    title: 'Cryptohub',
    description: 'A responsive application for exploring cryptocurrencies with real-time data.',
    tech: ['React', 'Rapid API', 'Cryptocurrency API'],
    github: 'https://github.com/bhushan-bobade/cryptohub-website',
  },
  {
    title: 'Chatify',
    description: 'A robust chat platform leveraging ChatEngine, OpenAI, and ChatGPT API technologies.',
    tech: ['React', 'Node.js', 'Express.js', 'ChatEngine', 'OpenAI API'],
    github: 'https://github.com/bhushan-bobade/chatify',
  },
]

export function Projects() {
  return (
    <section className="container mx-auto py-24 flex flex-col items-center" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Here&apos;s what I&apos;ve worked on. Each project has taught me something new and exciting!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

