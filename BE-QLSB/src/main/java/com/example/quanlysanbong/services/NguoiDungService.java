package com.example.quanlysanbong.services;

import com.example.quanlysanbong.models.NguoiDung;
import com.example.quanlysanbong.repositories.DonHangRepository;
import com.example.quanlysanbong.repositories.NguoiDungRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NguoiDungService {
    @Autowired
    private NguoiDungRepository nguoiDungRepository;
    public NguoiDung Login(String soDienThoai){
        return nguoiDungRepository.findBySoDienThoai(soDienThoai);
    }
    public void signUp(NguoiDung nguoiDung){
        nguoiDungRepository.save(nguoiDung);
    }
}
