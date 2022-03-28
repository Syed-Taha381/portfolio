import React from 'react'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'

const Landing = () => {
    return (
        <>
            <Header/>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
}

export default Landing
