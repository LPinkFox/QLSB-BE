import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function SanPham() {
    const [sanpham, setSanPham] = useState([])
    const [sanbong, setSanBong] = useState([]);
    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        const result = await axios.get("http://localhost:8080/api/admin/sanpham")
        const result1 = await axios.get("http://localhost:8080/api/admin/sanbong")
        setSanPham(result.data);
        setSanBong(result1.data);
    }

    return (
        <>
            <Navbar />
            <div className='container' style={{height: '80vh'}}>
                <div className='p-2 d-flex'>
                    <table className="table caption-top border shadow mx-2 ">
                        <caption className='text-center h2 '> Sản phẩm</caption>
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên Sản Phẩm</th>
                                <th scope="col">Giá Bán</th>
                                <th scope="col">Số Lượng Kho</th>
                                <th scope="col">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sanpham.map((sanpham, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{sanpham.tenSanPham}</td>
                                        <td>{sanpham.giaBan}</td>
                                        <td>{sanpham.soLuongKho}</td>
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
                    <table className="table caption-top border shadow mx-2  ">
                        <caption className='text-center h2'>Sân bóng</caption>
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
