import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// created a Contact form display page exporting it with a Contact function to App.js
export default function Contact() {

    // used a bootstrap modal to make a contact form, used use state and form to create the page
    return (
        <>
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
                <Form.Group className="mb-3" controlId="ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required autoFocus pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" required rows={3} />
                </Form.Group>
                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

