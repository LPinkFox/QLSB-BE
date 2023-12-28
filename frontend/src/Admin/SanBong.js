import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

export default function SanBong() {
    const [sanbong, setSanBong] = useState([]);

    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        const result = await axios.get("http://localhost:8080/api/admin/sanbong")
        setSanBong(result.data)
    }

    return (
        <>
            <Navbar />
            <div className='container '>
                <h2 className='text-center p-2'>Danh sách Sân bóng</h2>
                <div className='p-2'>
                    <table className="table caption-top border shadow">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên Sân</th>
                                <th scope="col">Giá Bán</th>
                                <th scope="col">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sanbong.map((sanbong, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{sanbong.tenSan}</td>
                                        <td>{sanbong.gia}</td>
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
