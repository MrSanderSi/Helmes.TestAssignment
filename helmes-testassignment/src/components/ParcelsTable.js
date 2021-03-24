import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetParcels } from '../services/orders'

export const ParcelsTable = () => {
    const parcels = useSelector(state => state.logistics.parcels);
    const dispatch = useDispatch();

    useEffect(() => {
        GetParcels(dispatch);
    }, []);

    return <table className='table table-dark'>
        <tbody>
            {
                parcels.map(o =>
                    <tr key={o.Id}>
                        <td style={{ textAlign: 'left' }}>{o.ParcelNumber}</td>
                        <td style={{ textAlign: 'left' }}>{o.RecipiantsName}</td>
                        <td style={{ textAlign: 'left' }}>{o.DestinationCountry}</td>
                        <td style={{ textAlign: 'left' }}>{o.ParcelWeight}</td>
                        <td style={{ textAlign: 'left' }}>{o.ParcelPrice}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}
