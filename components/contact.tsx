'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      href: 'mailto:bhushanbobade2023@gmail.com',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/bhushan-bobade18',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/bhushan-bobade',
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: 'Twitter',
      href: 'https://twitter.com/bhushannbobade',
    },
  ]

  return (
    <section className="container mx-auto py-24 px-4" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Feel free to reach out through any of these platforms
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="lg"
              className="min-w-[200px] gap-2 group hover:border-primary"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span>{link.label}</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            </Button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

