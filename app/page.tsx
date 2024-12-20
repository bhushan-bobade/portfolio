import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import  Skills  from '@/components/skills'
import { Projects } from '@/components/projects'
import  Experience  from '@/components/experience'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

