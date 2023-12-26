
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
import Navbar from './Navbar';
function App() {
  return (
    <BrowserRouter>
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
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
