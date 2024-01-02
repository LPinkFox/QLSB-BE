import React, { useContext } from 'react'
import available from '../assets/Yards/available.png'
import unavailable from '../assets/Yards/unavailable.png'
import { rentedYard } from '../Yard'
import { RentContext } from '../contexts/RentContext'
import moment from 'moment'
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
        (yard) => moment(yard.ngay, 'YYYY-MM-DD').isSame(moment(props.date, 'MM/DD/YYYY'), 'day') && yard.kip === props.kip && yard.idSanBong === props.id
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
                    <h2 className="my-yard-date">Ngày: {moment(props.date, 'MM/DD/YYYY').format('DD/MM/YYYY')}</h2>
                    <h2 className="my-yard-kip">Kíp: {props.kip}</h2>
                    <h2 className="my-yard-price">Giá: {props.giaSan} VND</h2>
                    {isRented ? <></> : <button className="my-yard-button" onClick={handleRentClick}>Đặt</button>}
                </div>
            </div>) : null
    );
}
