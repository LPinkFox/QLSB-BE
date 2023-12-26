import React from 'react'
import Navbar from '../Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function TaiKhoan() {
    const [taikhoan, setTaikhoan] = useState([])
    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        const result = await axios.get("http://localhost:8080/api/admin/taikhoan")
        setTaikhoan(result.data);
    }
    return (
        <>
            <Navbar />
            <div className='container '>
                <div className='p-5'>
                    <table className="table caption-top border shadow ">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Họ Tên</th>
                                <th scope="col">Số Điện Thoại</th>
                                <th scope="col">Vai Trò</th>
                                <th scope="col">Địa Chỉ</th>
                                <th scope="col">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                taikhoan.map((taikhoan, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{taikhoan.hoTen}</td>
                                        <td>{taikhoan.sdt}</td>
                                        <td>{taikhoan.vaiTro}</td>
                                        <td>{taikhoan.diaChi}</td>
                                        <td>
                                            <button className='btn btn-danger mx-2 '>
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
