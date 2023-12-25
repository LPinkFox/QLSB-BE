import React, { useContext } from 'react'
import available from '../assets/Yards/available.png'
import unavailable from '../assets/Yards/unavailable.png'
import { rentedYard } from '../Yard'
import { RentContext } from '../contexts/RentContext'
export const Yard = (props) => {
    const rentContext = useContext(RentContext);
    const handleRentClick = () => {
        const yardInfo = {
            id: props.id,
            date: props.date,
            kip: props.kip,
        };

        rentContext.addToCart(yardInfo);
    };
    const isRented = rentedYard.some(
        (yard) => yard.ngay === props.date && yard.kip === props.kip && yard.id === props.id
    );
    return (
        <div>
            <h2>Sân số {props.id}</h2>
            <h2>{props.date}</h2>
            <h2>{props.kip}</h2>
            <img
                src={isRented ? unavailable : available}
                alt={isRented ? 'Unavailable' : 'Available'}
                style={{ width: '200px', height: '200px' }}
            />
            {isRented ? <></> : <button onClick={handleRentClick}>Đặt</button>}
        </div>
    );
}
