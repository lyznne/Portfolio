import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactimg from "../assets/img/contact-img.svg"

const Contact = () => {
    const forminitials = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message:'',
    }

    const [formDetails, setFormDetails] = useState(formininitials)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
            [category]: value
        })
    }

    const handleSubmit =async(e) => {
        e.preventDefault()  
        setButtonText('Sending ...')
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Send")
        let result  =  response.json()
        setFormDetails(formDetails)
        if (result.status === 200) {
            setStatus({ success: true, message: "Message sent successfully " })
        } else {
            setStatus({ success: false, message: "Something went wrong. Please try again later." })
        }
    }
    return  (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactimg} alt="contact-us" />
                    </Col>
                    <Col md={6} >
                        <h2>Get In Touch</h2>
                        <form  onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" className="" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate('firstname', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" className="" value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onFormUpdate('lastname', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" className="" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" className="" value={formDetails.phone} placeholder="Phone no." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col >
                                    <textarea rows="6" className="" value={formDetails.message} placeholder="message" onChange={(e) => onFormUpdate('message', e.target.value)} ></textarea>
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}> {status.message} </p>

                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>

            </Container>
        </section>


    )
}

export default Contact;