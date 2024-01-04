import React, { useContext, useEffect, useState } from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'
import { logInAPI, signUpAPI } from '../API'
const LoginSignup = () => {
    const [submit, setSubmit] = useState('Login');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    
    const handerPhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handerPassWordChange = (event) => {
        setPassword(event.target.value);

    }
    const handerNameChange = (event) => {
        setName(event.target.value);

    }
    const handerAdressChange = (event) => {
        setAdress(event.target.value);
    }

    const handerLogin = async () => {
        if (submit === 'Login') {
            try {
                const data = {
                    "sdt": phoneNumber,
                    "password": password
                };
                const response = await fetch(logInAPI, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
            
                const responseData = await response.json();
            
                // Xử lý khi request thành công
                login(responseData);
                alert(`Xin chào ${responseData.hoTen}`);
                if (responseData.vaiTro.toLowerCase() === 'user') navigate('/homepage');
                else navigate('/admin');
            } catch (error) {
                if (error.message === 'HTTP error 401') {
                    // Xử lý khi password incorrect
                    alert('Password incorrect');
                } else if (error.message === 'HTTP error 404') {
                    // Xử lý khi account doesn't exist
                    alert('Account does not exist');
                } else {
                    // Xử lý khi có lỗi xảy ra
                    console.error('An error occurred:', error);
                }
            }
        }
    };

    const handerSignup = async () => {
        if (submit === 'Signup') {
            try {
                const data = {
                    "sdt": phoneNumber,
                    "hoTen": name,
                    "password": password,
                    "diaChi": adress
                }
                const response = await fetch(signUpAPI, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const responseData = await response.json();
                if (response.ok) {
                    // Xử lý khi request thành công
                    alert(`Welcome ${responseData.hoTen}`)
                    setSubmit('Login');
                    setPassword('');
                } else {
                    // Xử lý khi request thất bại
                    alert('Lỗi tạo tài khoản');
                }
            } catch (error) {
                alert('Lỗi server');
            }
        }
    }


    return (
        <div className="my-container">
            <div className="my-header">
                <div className="my-text">{submit}</div>
                <div className="my-underline"></div>
            </div>
            <div className="my-inputs">
                <div className="my-input">
                    <input placeholder='Số điện thoại' type="text" onChange={handerPhoneNumberChange} />
                </div>
                {
                    submit === "Signup" ?
                        <div className="my-input">
                            <input placeholder='Họ và Tên' type="text" onChange={handerNameChange} />
                        </div>
                        : <></>
                }
                {
                    submit === "Signup" ?
                        <div className="my-input">
                            <input placeholder='Địa chỉ' type="text" onChange={handerAdressChange} />
                        </div>
                        : <></>
                }
                <div className="my-input">
                    <input placeholder='Password' type="password" onChange={handerPassWordChange} />
                </div>
            </div>
            <div className="my-submit-container">
                <div className={submit === "Login" ? "my-submit my-gray" : "my-submit"} onClick={() => { setSubmit('Signup'); handerSignup(); }}>Sign Up</div>
                <div className={submit === "Signup" ? "my-submit my-gray" : "my-submit"} onClick={() => { setSubmit('Login'); handerLogin(); }} > Login</div>
            </div>
        </div>
    )
}

export default LoginSignup;