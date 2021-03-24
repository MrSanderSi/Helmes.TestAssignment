import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewParcels } from '../services/orders';
/*const NewParcelForm = [
    {name: 'ParcelNumber', title: 'Parcel number'},
    {name: 'RecepiantsName', title: 'Recipiants name'},
    {name: 'DestinationCountry', title: 'Destination country'},
    {name: 'ParcelWeight', title: 'Parcel weight'},
    {name: 'ParcelPrice', title: 'Parcel price'}

]*/
export const NewParcelModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>New Shipment of parcels</Button>
        <ParcelModal parcel={null} handleFormSubmit={NewParcels} show={show} handleClose={handleClose} />
    </div>
}

const ParcelModal = ({ parcel, handleFormSubmit, show, handleClose }) => {
    const [modalParcel, setModalParcel] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setModalParcel(parcel);
    }, [parcel]);

    return (
        <div style={{padding:'2px'}}>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title style={{textAlign:'center'}}>Add a parcel to shipment</Modal.Title>
                </Modal.Header>
                <Form style={{textAlign:'center'}} onSubmit={event => {
                    event.preventDefault();
                    handleFormSubmit(dispatch, modalParcel);
                }}>
                    <Modal.Body style={{padding:'5px'}}>
                        <Form.Group>
                            <Form.Label style={{margin:'10px'}}>Parcel Number: </Form.Label>
                            <FormControl value={modalParcel === null ? '' : modalParcel.ParcelNumber}
                                onChange={event => setModalParcel({ ...modalParcel, BagValue: event.target.value })} />
                            <Form.Label style={{margin:'10px'}}>Amount of Parcels: </Form.Label>
                            <FormControl value={modalParcel === null ? '' : modalParcel.AmountOfParcels}
                                onChange={event => setModalParcel({ ...modalParcel, AmountOfParcels: event.target.value })} />
                            <Form.Label style={{margin:'10px'}}>Destination Country: </Form.Label>
                            <FormControl value={modalParcel === null ? '' : modalParcel.DestinationCountry}
                                onChange={event => setModalParcel({ ...modalParcel, DestinationCountry: event.target.value })} />
                            <Form.Label style={{margin:'10px'}}>Parcel weight: </Form.Label>
                            <FormControl value={modalParcel === null ? '' : modalParcel.ParcelWeight}
                                onChange={event => setModalParcel({ ...modalParcel, ParcelWeight: event.target.value })} />
                                <Form.Label style={{margin:'10px'}}>Parcel price: </Form.Label>
                            <FormControl value={modalParcel === null ? '' : modalParcel.ParcelPrice}
                                onChange={event => setModalParcel({ ...modalParcel, ParcelPrice: event.target.value })} />
                            
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
