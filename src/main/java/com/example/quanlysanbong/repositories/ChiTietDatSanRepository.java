package com.example.quanlysanbong.repositories;

import com.example.quanlysanbong.models.ChiTietDatSan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChiTietDatSanRepository extends JpaRepository<ChiTietDatSan, Integer> {
}
