import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Rent = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <Navbar />
            <div>
                <h1>Chọn ngày</h1>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
                    isClearable
                    placeholderText="Select a date"
                />
            </div>
        </>
    );
};

export default Rent;
