import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

export default function SanPham() {
  const [sanpham, setSanPham] = useState([])
  useEffect(()=>{
    loadData();
  },[])
  const loadData = async()=>{
      const result = await axios.get("http://localhost:8080/api/admin/sanpham")
      setSanPham(result.data);
  }

  return (
    <>
    <Navbar/>
    <div className='container '>
            <div className='p-5'>
                <table className="table caption-top border shadow ">
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
            </div>
        </div>
       </> 
  )
}
