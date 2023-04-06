import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import logo from "../assets/img/logo.svg"
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll  = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(true)
            }
        } 

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
        
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
        <Container>
            <Navbar.Brand href='#home'>
                <img src={logo}alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navabr-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}        onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href='#skills'   className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#">
                            <FontAwesomeIcon icon="fa-brands fa-square-twitter" beatFade style={{color: "#1e64dc",}} />
                            {/* <FontAwesomeIcon icon={solid("square-twitter")} beatFade style={{color: "#1959c8",}} /> */}
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" beatFade style={{color: "#0a2e6b",}} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon="fa-brands fa-square-whatsapp" beatFade style={{color: "#145fe1",}} />
                        </a>
                    </div>
                    <button className="vvd" onClick={() => console.log("clicked")}>
                        <span>Let's Connect</span>
                    </button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;