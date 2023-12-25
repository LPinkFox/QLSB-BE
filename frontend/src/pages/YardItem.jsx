import React, { useContext } from 'react'
import { RentContext } from '../contexts/RentContext';
import { allYard } from '../Yard';
export const YardItem = (props) => {
    const { id, date, kip } = props.data;
    const selectedYard = allYard.find((yard) => yard.id === id);
    const { rentedYard, setRentedYard, addToCart } = useContext(RentContext);
    return (
        <div className='yardItems'>
            <div className="description">
                <p>
                    <b>{selectedYard.tenSan}</b>
                </p>
                <p>{date}</p>
                <p>{kip}</p>
                <p>{selectedYard.gia}</p>
            </div>

        </div>
    )
}
