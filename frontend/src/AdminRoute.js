import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import SideBar from './Admin/SideBar'
import TrangChu from './Admin/TrangChu'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SanPham from './Admin/Sanpham'
import SanBong from './Admin/SanBong'
import TaiKhoan from './Admin/TaiKhoan'
import DonHang from './Admin/DonHang'
import DoanhThu from './Admin/DoanhThu'
import ChiTietDonHang from './Admin/ChiTietDonHang'
import TaiKhoanAdmin from './Admin/TaiKhoanAdmin'
function AdminRoute() {
  return (
    <div className='d-flex min-vh-100'>
      <div className='w-auto'>
        <SideBar/>
      </div>
      <div className='col overflow-auto'>
          <Routes>
            <Route path='/' element = {<TrangChu/>}/>
            <Route path='/sanpham' element = {<SanPham/>}/>
            <Route path='/sanbong' element = {<SanBong/>}/>
            <Route path='/taikhoan' element = {<TaiKhoan/>}/>
            <Route path='/donhang' element = {<DonHang/>}/>
            <Route path='/doanhthu' element = {<DoanhThu/>}/>
            <Route path='/donhang/:id' element = {<ChiTietDonHang/>}/>
            <Route path='/taikhoanadmin' element = {<TaiKhoanAdmin/>}/>

          </Routes>
      </div>
    </div>

  )
}

export default AdminRoute