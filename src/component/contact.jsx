import React from 'react';
import * as emailjs from 'emailjs-com'

//  react-icons package

import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
  } from 'react-icons/fa';

// reactstrap components
import { Row, Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleSubmit(e) {
        e.preventDefault()

        const { name, email, subject, message } = this.state 

        let templateParams = {
            name: name,
            from_name: email,
            to_name: 'apuko.kernael@gmail.com',
            subject: subject,
            message_html: message,
        }

        emailjs.send(
            'gmail',
            'template_Mk3vprTX',
            templateParams,
            'user_UIuHCFozJG8zqRYYlILsG',
        )
         this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return (
            <>
                <div id="my-contact" className="container text-center my-5">
                    <div className="container">
                        <h1>Send A Message</h1>
                        <i></i>
                        <Row>
                            <Col lg="6">
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormGroup controlId="formBasicEmail">
                                    <Label className="text-muted">Email address </Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'email')}
                                        placeholder="Enter email"
                                        required

                                    />
                                </FormGroup>
                                <FormGroup controlId="formBasicName">
                                    <Label className="text-muted">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'name')}
                                        placeholder="Enter your name"
                                        required

                                    />
                                </FormGroup>
                                <FormGroup controlId="formBasicSubject">
                                    <Label className="text-muted">Subject</Label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        value={this.state.subject}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'subject')}
                                        placeholder="Subject"
                                        required

                                    />
                                </FormGroup>
                                <FormGroup controlId="formBasicMessage">
                                    <Label className="text-muted">Message</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        value={this.state.message}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'message')}
                                        required
                                    />
                                </FormGroup>
                                <Button variant="primary" type="submit">Send Message</Button>

                                    
                            </Form>
                            </Col>
                            <Col lg="6">
                            <h1>Get in Touch</h1>
                            <p>
                                Whether you want to get in touch, talk about a project collaboration, 
                                or just say hi, I'd love to hear from you.
                                Simply fill the form and send me an email.
                            </p>
                            <div className="social-network social-circle">
                                <a 
                                href="https://github.com/Kernael92"
                                className="github"
                                >
                                    <FaGithub />
                                </a>
                                <a 
                                href="https://github.com/Kernael92"
                                className="twitter"
                                >
                                    <FaTwitter />
                                </a>
                                <a 
                                href="https://www.linkedin.com/in/kernael-apuko-92636217b/"
                                className="linkedin"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>     
                            
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact; 