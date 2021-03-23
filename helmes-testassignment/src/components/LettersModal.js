import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewLetter } from '../services/orders';

export const NewLetterModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>New bag of letters</Button>
        <LetterModal letter={null} handleFormSubmit={NewLetter} show={show} handleClose={handleClose} />
    </div>
}

const LetterModal = ({ letter, handleFormSubmit, show, handleClose }) => {
    const [modalLetter, setModalLetter] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setModalLetter(letter);
    }, [letter]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalLetter);
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl value={modalLetter === null ? '' : modalLetter.value}
                            onChange={event => setModalLetter({ ...modalLetter, value: event.target.value })} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Save
            </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
