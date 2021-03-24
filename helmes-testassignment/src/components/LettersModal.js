import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewLetter } from '../services/orders';
/*
const NewLetterForm = [
    {name: 'BagNumber', title: 'Bag number'},
    {name: 'AmountOfLetters', title: 'Amount of letters'},
    {name: 'BagWeight', title: 'Bag weight'},
    {name: 'ShippingPrice', title: 'Shipping price'}
]*/
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
        <div style={{padding: '2px'}}>
            <Modal show={show} onHide={handleClose} style={{padding:'5px'}}>
            <Modal.Header>
                <Modal.Title style={{textAlign:'center'}}>Shipment of Letters</Modal.Title>
            </Modal.Header>
            <Form style={{textAlign:'center'}} onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalLetter);
            }}>
                <Modal.Body style={{padding:'5px'}}>
                    <Form.Group>
                        <Form.Label style={{margin:'10px'}}>Bag number: </Form.Label>
                        <FormControl value={modalLetter === null ? '' : modalLetter.BagValue}
                            onChange={event => setModalLetter({ ...modalLetter, BagValue: event.target.value })} />
                        <Form.Label style={{margin:'10px'}}>Amount of letters: </Form.Label>
                        <FormControl value={modalLetter === null ? '' : modalLetter.AmountOfLetters}
                            onChange={event => setModalLetter({ ...modalLetter, AmountOfLetters: event.target.value })} />
                        <Form.Label style={{margin:'10px'}}>Bag weight: </Form.Label>
                        <FormControl value={modalLetter === null ? '' : modalLetter.BagWeight}
                            onChange={event => setModalLetter({ ...modalLetter, BagWeight: event.target.value })} />
                        <Form.Label style={{margin:'10px'}}>Amount of letters: </Form.Label>
                        <FormControl value={modalLetter === null ? '' : modalLetter.ShoppingPrice}
                            onChange={event => setModalLetter({ ...modalLetter, ShoppingPrice: event.target.value })} />
                        
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{paddingBottom:'5px'}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                        <Button type='submit' variant="primary" onClick={handleClose}>
                            Save
                </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
        
        
    );
}
