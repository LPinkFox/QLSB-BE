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
    console.log(props.date);
    return (
        props.date ?
            (<div className="my-yard">
                <div className="my-yard-decription">
                    <img
                        className="my-yard-image"
                        src={isRented ? unavailable : available}
                        alt={isRented ? 'Unavailable' : 'Available'}
                    />
                    <h3 className="my-yard-title">Sân số {props.id}</h3>
                    <h5 className="my-yard-date">Ngày: {moment(props.date, 'DD/MM/YYYY').format('DD/MM/YYYY')}</h5>
                    <h5 className="my-yard-kip">Kíp: {props.kip}</h5>
                    <h5 className="my-yard-price">Giá: {props.giaSan.toLocaleString()} VND</h5>
                    <div className='my-yard-div'>
                    {isRented ? <></> : <button className="my-yard-button" onClick={handleRentClick}>Đặt</button>}
                    </div>
                </div>
            </div>) : null
    );
}
