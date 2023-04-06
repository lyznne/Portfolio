import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logo.svg'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <MailchimpForm />
                <Col sm={6} >
                    <img src={logo} alt="logo" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
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
                </Col>
            </Row>
        </Container>
    </footer>

    )
}

export default Footer