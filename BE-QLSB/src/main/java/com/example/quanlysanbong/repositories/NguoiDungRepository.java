package com.example.quanlysanbong.repositories;

import com.example.quanlysanbong.models.NguoiDung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NguoiDungRepository extends JpaRepository<NguoiDung, Integer> {
    NguoiDung findBySoDienThoai(String soDienThoai);
}
