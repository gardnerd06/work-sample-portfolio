import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// created a Modal display page exporting it with a Contact function to App.js
export default function Contact() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    // used a bootstrap modal to make a contact form, used use state and form to create the page
    return (
        <>

            <Modal show={show} onHide={handleClose} hasValidation>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="urName"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                // used required to make sure user input text and checked input with a regex pattern
                                required
                                pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="ControlTextarea1"
                        >
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" required rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

