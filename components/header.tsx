'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const navItems = [
  { path: 'home', name: 'Home' },
  { path: 'about', name: 'About' },
  { path: 'experience', name: 'Experience' },
  { path: 'projects', name: 'Projects' },
  { path: 'skills', name: 'Skills' },
  { path: 'contact', name: 'Contact' },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const scrollToSection = (path: string) => {
    const element = document.getElementById(path)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(path)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/bb.png"
              alt="BB Logo"
              width={40}
              height={40}
            />
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold italic text-primary"
            >
          
            </motion.span>
            <span className="sr-only">(Bhushan Bobade)</span>
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        <nav className={`${isMobileMenuOpen ? 'absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border p-4' : 'hidden'} md:relative md:top-0 md:flex md:items-center md:space-x-6`}>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => scrollToSection(item.path)}
              className={`text-sm font-medium transition-colors hover:text-primary w-full text-left py-2 md:py-0 ${
                activeSection === item.path ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

