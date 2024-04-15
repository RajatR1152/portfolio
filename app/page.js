import Header from '@/components/Header'
import Hero from '@/components/hero/Hero'
import React from 'react'
import 'aos/dist/aos.css';
import SkillsAndExp from '@/components/skills/SkillsAndExp';
import Projects from '@/components/projects/Projects';
import About from '@/components/about/About';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function page() {

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <SkillsAndExp />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  )
}
