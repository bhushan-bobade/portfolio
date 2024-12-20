// 'use client'

// import { motion } from 'framer-motion'
// import { Github, Linkedin, Mail, FileText } from 'lucide-react'
// import Link from 'next/link'

// const socialLinks = [
//   {
//     name: 'LinkedIn',
//     href: 'https://linkedin.com/in/bhushan-bobade18/',
//     icon: Linkedin,
//   },
//   {
//     name: 'GitHub',
//     href: 'https://github.com/bhushan-bobade',
//     icon: Github,
//   },
//   {
//     name: 'Email',
//     href: 'mailto:bhushanbobade2023@gmail.com',
//     icon: Mail,
//   },
//   {
//     name: 'Resume',
//     href: '/resume.pdf',
//     icon: FileText,
//   },
// ]

// export function SideNav() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="fixed left-4 bottom-4 z-50 flex gap-4"
//     >
//       {socialLinks.map((link) => (
//         <Link
//           key={link.name}
//           href={link.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white hover:text-primary transition-colors p-2"
//         >
//           <link.icon className="h-6 w-6" />
//           <span className="sr-only">{link.name}</span>
//         </Link>
//       ))}
//     </motion.div>
//   )
// }

