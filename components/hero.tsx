'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8"
      >
        <motion.img
          src="/profile.jpg"
          alt="Bhushan Bobade"
          className="w-26 h-32 rounded-full mx-auto mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        />
        {/* <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I&apos;m{' '}
          <span className="text-primary">Bhushan </span>
        </h1> */}

<h1 className="text-2xl font-bold md:text-4xl sm:text-xl xl:text-[2.5rem] text-left sm:text-center leading-tight md:leading-tight">
            Hi, I&apos;m{" "}
            <span className="relative inline-block bg-clip-text font-canela font-normal text-transparent bg-gradient-to-r from-[#208a81] via-[#7691cb] to-[#f08ad8]">
              Bhushan,
            </span>
            &nbsp;just another{" "}
            <span className="text-2xl md:italic md:text-3xl xl:text-[2.5rem] mb-3 sm:mb-0 text-center sm:text-left font-extrabold dark:text-zinc-400">
              Software Developer.
            </span>
          </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A recent graduate passionate about full-stack development and eager to make an impact in the tech industry.
        </p>

        <div>
          </div>
        <Link
            href="https://drive.google.com/file/d/1Cf-7QtJreGLo-N22F-6lgBR_DCuEkOLJ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Resume
        </Button>
          </Link>




        
      </motion.div>
    </section>
  )
}

