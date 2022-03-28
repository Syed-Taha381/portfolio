import React, { useEffect, useRef } from 'react'
import logo from '../Assets/imgs/syedtaha.png'
import '../styles/Header.css'
import { gsap } from 'gsap'

const Header = () => {
    const bars = useRef(null)
    const mobileNav = useRef(null)
    const header = useRef(null)
    const navlinks = document.querySelectorAll('.navlink')
    const addActiveClass = e => {
        navlinks.forEach(link => link.classList.contains('activeLink') && link.classList.remove('activeLink'))
        e.target.classList.add('activeLink')
    }
    const addClassToNav = () => {
        const scroll = window.scrollY

        if (scroll > 100) {
            header?.current.classList.add('headerBg')
        }
        else {
            header?.current.classList.remove('headerBg')
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', addClassToNav)
        return () => {
            window.removeEventListener('scroll', addClassToNav)
        }
    }, [])
    
    const addClassToNavLink = () => {
        const Home = document.getElementById('Home')
        const Projects = document.getElementById('Projects')
        const Skills = document.getElementById('Skills')
        const Contact = document.getElementById('Contact')
        const H = document.getElementById('H')
        const P = document.getElementById('P')
        const S = document.getElementById('S')
        const C = document.getElementById('C')
        const scroll = window.scrollY
        if (scroll < Home.clientHeight - 100) {
            P.classList.remove('activeLink')
            S.classList.remove('activeLink')
            C.classList.remove('activeLink')
            H.classList.add('activeLink')
        }
        else if (scroll < Home.clientHeight + Projects.clientHeight -100) {
            H.classList.remove('activeLink')
            S.classList.remove('activeLink')
            C.classList.remove('activeLink')
            P.classList.add('activeLink')
        }

        else if (scroll < Home.clientHeight + Projects.clientHeight + Skills.clientHeight - 230) {
            P.classList.remove('activeLink')
            C.classList.remove('activeLink')
            H.classList.remove('activeLink')
            S.classList.add('activeLink')
        }

        else {
            P.classList.remove('activeLink')
            S.classList.remove('activeLink')
            H.classList.remove('activeLink')
            C.classList.add('activeLink')
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', addClassToNavLink)
        return () => {
            window.removeEventListener('scroll', addClassToNavLink)
        }
    }, [])
    const openNav = () => {
        bars.current.classList.toggle('barsActive')
        let mN= document.querySelector('.mobileNav')
        mN.classList.toggle('mobileNavActive')
    }
    const closeSidebar =()=>{
        let mN= document.querySelector('.mobileNav')
         mN.classList.remove('mobileNavActive')
         bars.current.classList.remove('barsActive')
    }
   
        return (
        <header ref={header} as='nav'>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li><a id='H' onClick={addActiveClass} className="navlink activeLink" href="#Home">Home</a></li>
                <li><a id='P' onClick={addActiveClass} className="navlink " href="#Projects">Projects</a></li>
                <li><a  id='S' onClick={addActiveClass} className="navlink " href="#Skills">Skills</a></li>
                <li><a id='C' onClick={addActiveClass} className="navlink " href="#Contact">Contact</a></li>
                <li className='heroBtn'><a href="#Contact">Get In Touch</a></li>
            </ul>
            <div ref={bars} className='bars' onClick={openNav}>
                <span className='bar bar1'></span>
                <span className='bar bar2'></span>
                <span className='bar bar3'></span>
                <span className='barArrow'></span>

            </div>
            <div  className='mobileNav'>
                <ul>
                    <li><a className='mobileNavItem'  onClick={closeSidebar} href="#home">Home</a></li>
                    <li><a className='mobileNavItem'  onClick={closeSidebar} href="#Projects">Projects</a></li>
                    <li><a className='mobileNavItem' onClick={closeSidebar}  href="#Skills">Skills</a></li>
                    <li><a className='mobileNavItem' onClick={closeSidebar}  href="#Contact">Contact</a></li>
                    <li className='mobileNavBtn'><a onClick={closeSidebar} className='mobileNavItem' href="#Contact">Get In Touch</a></li>
                </ul>
            </div>
          
        </header>
    )
}

export default Header
