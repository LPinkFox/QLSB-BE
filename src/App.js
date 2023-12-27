
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SideBar from './SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrangChu from './Component/TrangChu';
import SanPham from './Component/SanPham';
import SanBong from './Component/SanBong';
import TaiKhoan from './Component/TaiKhoan';
import DonHang from './Component/DonHang';
import DoanhThu from './Component/DoanhThu';
import ChiTietDonHang from './Component/ChiTietDonHang';
import TaiKhoanAdmin from './Component/TaiKhoanAdmin';
function App() {
  return (
    <BrowserRouter>
    <div className='d-flex min-vh-100'>
      <div className='w-auto'>
        <SideBar/>
      </div>
      <div className='col overflow-auto'>
          <Routes>
            <Route path='/admin' element = {<TrangChu/>}/>
            <Route path='/admin/sanpham' element = {<SanPham/>}/>
            <Route path='/admin/sanbong' element = {<SanBong/>}/>
            <Route path='/admin/taikhoan' element = {<TaiKhoan/>}/>
            <Route path='/admin/donhang' element = {<DonHang/>}/>
            <Route path='/admin/doanhthu' element = {<DoanhThu/>}/>
            <Route path='/admin/donhang/:id' element = {<ChiTietDonHang/>}/>
            <Route path='/admin/taikhoanadmin' element = {<TaiKhoanAdmin/>}/>

          </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
