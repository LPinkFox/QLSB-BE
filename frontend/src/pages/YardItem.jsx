import React, { useContext } from 'react';
import { RentContext } from '../contexts/RentContext';
import { allYard } from '../Yard';
import available from '../assets/Yards/available.png'
export const YardItem = (props) => {
    const { id, date, kip } = props.data;
    const selectedYard = allYard.find((yard) => yard.id === id);
    const {  removeFromCart} = useContext(RentContext);

    return (
        <div className='my-yardItem'> {/* Updated className */}
            <img src={available} className='' />
            <div className="my-description"> {/* Updated className */}
                <p>
                    <b>{selectedYard.tenSan}</b>
                </p>
                <p>Ngày: {date}</p>
                <p>Kíp: {kip}</p>
                <p>Giá Thuê: {selectedYard.gia} VNĐ</p>
            </div>
            <button className='my-yard-button' onClick={() => removeFromCart(date,kip, id)}>Xóa</button>
        </div>
    );
}
