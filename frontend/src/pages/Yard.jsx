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
        (yard) => yard.ngay === props.Date && yard.kip === props.kip && yard.id === props.id
    );
    return (
        props.date ?
            (<div className="my-yard">
                <div className="my-yard-decription">
                    <img
                        className="my-yard-image"
                        src={isRented ? unavailable : available}
                        alt={isRented ? 'Unavailable' : 'Available'}
                    />
                    <h2 className="my-yard-title">Sân số {props.id}</h2>
                    <h2 className="my-yard-date">Ngày: {props.date}</h2>
                    <h2 className="my-yard-kip">Kíp: {props.kip}</h2>
                    {isRented ? <></> : <button className="my-yard-button" onClick={handleRentClick}>Đặt</button>}
                </div>
            </div>) : null
    );
}
