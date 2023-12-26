import React from 'react'
import Navbar from '../Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
export default function DonHang() {
  const [donhang, setDonhang] = useState([])
    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        const result = await axios.get("http://localhost:8080/api/admin/danhsachdonhang")
        
        setDonhang(result.data);
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
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Trạng thái thanh toán</th>
                            <th scope="col">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donhang.map((donhang, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{donhang.nguoiDung.sdt}</td>
                                    <td>{moment(donhang.ngayTao).format('D/M/Y H:mm:ss')}</td>
                                    <td>{donhang.tongTien}</td>
                                    <td>{donhang.trangThai}</td>
                                    <td>
                                        <div>
                                        <button className='btn btn-success mx-2 '>
                                            Thành công
                                        </button>
                                        <button className='btn btn-primary mx-2 '>
                                            Chi tiết
                                        </button>
                                        <button className='btn btn-danger mx-2 '>
                                            Xóa
                                        </button>
                                        </div>  
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
