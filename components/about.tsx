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
          Hi! I’m Bhushan Bobade, a passionate Full Stack Developer with a proven ability to craft innovative and efficient solutions in web development. 
          As a recent graduate in Computer Science and Engineering from G.H. Raisoni College of Engineering and Management, Pune, 
          I bring a blend of academic excellence and hands-on experience to every project.         
          </p>
          <p>
            My journey in tech began with a strong foundation in Computer Science and Engineering, 
            and I've since expanded my expertise through hands-on experience in internships and personal projects. 
            I'm particularly enthusiastic about technologies like React, Node.js, and Java, and I'm always eager to learn and adapt to new tools and frameworks.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
