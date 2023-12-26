import React from 'react'
import Navbar from '../Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Line, LineChart, CartesianGrid,XAxis, YAxis,Legend, Tooltip } from 'recharts';

export default function DoanhThu() {
  const [doanhthu, setDoanhthu] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/api/admin/danhsachdonhang")
    const transformedData = [];

    const formatData = result.data;
    for(let i=0; i<formatData.length; i++){
      formatData[i].ngayTao = moment(formatData[i].ngayTao).format('D/M')
    }

    for(let i = 0; i<formatData.length; i++){
      const curr = formatData[i];
      let exist = -1;
      for(let j=0; j<transformedData.length; j++){
          if(transformedData[j].ngayTao === curr.ngayTao){
            exist = j;
            break;
          }
      }
      if (exist !== -1) {
        transformedData[exist].Amount += curr.tongTien
      } else {
        transformedData.push({ ngayTao: curr.ngayTao, Amount: curr.tongTien });
      }
    }
    setDoanhthu(transformedData);
  };

  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center '>
          <LineChart width={800} height={400} data={doanhthu}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ngayTao" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Amount" stroke="#8884d8" activeDot={{ r: 8 }} name='Việt Nam Đồng' />
          </LineChart>
          <h2 className='my-4'> Biểu đồ Doanh thu theo ngày</h2>
      </div>
    </div>
    </>
  )
}
