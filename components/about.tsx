'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="py-24" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">About Me</h2>
        <div className="max-w-2xl mx-auto text-gray-300 space-y-4">
          <p>
            Hello! I'm Bhushan Bobade, a passionate Full Stack Developer with a keen interest in creating efficient and innovative web solutions. As a recent graduate from G.H.Raisoni College of Engineering and Management, Pune, I've honed my skills in various technologies and am excited to apply them in real-world scenarios.
          </p>
          <p>
            My journey in tech began with a strong foundation in Computer Science and Engineering, and I've since expanded my expertise through hands-on experience in internships and personal projects. I'm particularly enthusiastic about technologies like React, Node.js, and Java, and I'm always eager to learn and adapt to new tools and frameworks.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or brainstorming innovative ideas for my next project. I believe in the power of technology to solve real-world problems and am committed to creating solutions that make a positive impact.
          </p>
          <p>
            I'm currently seeking opportunities to contribute my skills and passion to a dynamic team where I can continue to grow as a developer while making meaningful contributions to exciting projects.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

