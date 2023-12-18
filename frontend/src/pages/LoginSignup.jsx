import React, { useContext, useState } from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'
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
                const loginAPI = 'http://localhost:8080/NguoiDung/Login'
                const data = {
                    "soDienThoai": phoneNumber,
                    "passWord": password
                };
                const response = await fetch(loginAPI, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const responseData = await response.json();
                if (response.ok) {
                    // Xử lý khi request thành công
                    login(responseData);
                    alert(`Xin chào ${responseData.hoTen}`);
                    navigate('/homepage');

                } else {
                    // Xử lý khi request thất bại
                    alert('Đăng nhập thất bại');
                }
            } catch (error) {
                console.log(error);
                alert('Lỗi server');
            }
        }
    };

    const handerSignup = async () => {
        if (submit === 'Signup') {
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
                    submit === "Signup" ? <div className="input">
                        <input placeholder='Họ và Tên' type="text" onChange={handerNameChange} />
                    </div> : <></>
                }
                {
                    submit === "Signup" ? <div className="input">
                        <input placeholder='Địa chỉ' type="text" onChange={handerAdressChange} />
                    </div> : <></>
                }
                <div className="input">
                    <input placeholder='Password' type="password" onChange={handerPassWordChange} />
                </div>
            </div>
            <div className="submit-container">
                <div className={submit === "Login" ? "submit gray" : "submit"} onClick={() => { setSubmit('Signup'); handerSignup(); }}>Sign Up</div>
                <div className={submit === "Signup" ? "submit gray" : "submit"} onClick={() => { setSubmit('Login'); handerLogin(); }} > Login</div>
            </div>
        </div >
    )

}
export default LoginSignup;