import React, { useCallback, useContext, useEffect, useState } from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom';
import { loginContext } from '../context/login-context'
import { userContext } from '../context/user-context'
const LoginSignup = () => {
    const [submit, setSubmit] = useState('Login');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const navigate = useNavigate();
    const { loged } = useContext(loginContext);
    const { setCurUser } = useContext(userContext);
    const resetIsLoggedIn = useCallback(() => {
        loged(false);
    }, [loged]);

    useEffect(() => {
        resetIsLoggedIn();
    }, [navigate, resetIsLoggedIn]);

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

    const handleLogIn = async () => {
        if (submit === 'Login') {
            try {
                const apiUrl = 'http://localhost:8080/NguoiDung/Login';

                const data = {
                    "soDienThoai": phoneNumber,
                    "passWord": password
                };
                console.log(data);
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const responseData = await response.json();
                if (response.ok) {
                    // Xử lý khi request thành công
                    alert(`Xin chào ${responseData.hoTen}`);
                    loged(true);
                    setCurUser(responseData);
                    navigate('/shop');

                } else {
                    // Xử lý khi request thất bại
                    alert('Đăng nhập thất bại');
                }
            } catch (error) {
                alert('Lỗi server');
                console.error('Lỗi khi gửi request:', error);
            }
        }
    };
    const handleSignUp = async () => {
        if (submit === 'Sign up') {
            try {
                const signUpAPI = 'http://localhost:8080/NguoiDung/SignUp';
                const data = {
                    "soDienThoai": phoneNumber,
                    "hoTen": name,
                    "passWord": password,
                    "diaChi": adress,
                    "vaiTro": "user"
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
        <div className="container">
            <div className="header">
                <div className="text">{submit}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

                <div className="input">
                    <input placeholder='Số điện thoại' type="text" onChange={handerPhoneNumberChange} />
                </div>
                {
                    submit === "Sign up" ? <div className="input">
                        <input placeholder='Họ và Tên' type="text" onChange={handerNameChange} />
                    </div> : <></>
                }
                {
                    submit === "Sign up" ? <div className="input">
                        <input placeholder='Địa chỉ' type="text" onChange={handerAdressChange} />
                    </div> : <></>
                }
                <div className="input">
                    <input placeholder='Password' type="password" onChange={handerPassWordChange} />
                </div>
            </div>
            <div className="submit-container">
                <div className={submit === "Login" ? "submit gray" : "submit"} onClick={() => { setSubmit('Sign up'); handleSignUp(); }}>Sign Up</div>
                <div className={submit === "Sign up" ? "submit gray" : "submit"} onClick={() => { setSubmit('Login'); handleLogIn(); }} > Login</div>
            </div>
        </div >
    )
}

export default LoginSignup
