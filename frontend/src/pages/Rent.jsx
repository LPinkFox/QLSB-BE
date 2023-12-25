import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { allYard } from '../Yard'
import { Yard } from './Yard';
const Rent = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };
    const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : '';
    const timeSlots = ['Kíp 1', 'Kíp 2', 'Kíp 3', 'Kíp 4', 'Kíp 5'];

    return (
        <>
            <Navbar />
            <div>
                <h1>Chọn ngày và kíp</h1>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Select a date"
                />
                <div>
                    <label>Chọn kíp:</label>
                    <select value={selectedTime} onChange={handleTimeChange}>
                        {timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                {allYard.map((yard) => {
                    return <Yard date={formattedDate} id={yard.id} kip={timeSlots.indexOf(selectedTime) + 1} />
                })}
            </div>
        </>
    );
};

export default Rent;
