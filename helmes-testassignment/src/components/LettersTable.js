import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
                        <td style={{ textAlign: 'left' }}>{o.BagNumber}</td>
                        <td style={{ textAlign: 'left' }}>{o.AmountOfLetters}</td>
                        <td style={{ textAlign: 'left' }}>{o.BagWeight}</td>
                        <td style={{ textAlign: 'left' }}>{o.ShippingPrice}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}
