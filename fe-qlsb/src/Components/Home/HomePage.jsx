import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            // Chưa đăng nhập, chuyển hướng đến trang login
            navigate('/');
        }
    }, [isLoggedIn, navigate]);
    return (
        <div>HomePage</div>
    )
}

export default HomePage