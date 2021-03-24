import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetLetters } from '../services/orders'

export const LettersTable = () => {
    const letters = useSelector(state => state.logistics.letters);
    const dispatch = useDispatch();

    useEffect(() => {
        GetLetters(dispatch);
    }, []);

    return <table className='table table-dark'>
        <tbody>
            {
                letters.map(o =>
                    <tr key={o.Id}>
                        <td style={{ textAlign: 'center' }}>Bag number: {o.BagNumber}</td>
                        <td style={{ textAlign: 'center' }}>Amount of letters: {o.AmountOfLetters}</td>
                        <td style={{ textAlign: 'center' }}>Bag weight: {o.BagWeight}</td>
                        <td style={{ textAlign: 'center' }}>Shipping price: {o.ShippingPrice}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}
