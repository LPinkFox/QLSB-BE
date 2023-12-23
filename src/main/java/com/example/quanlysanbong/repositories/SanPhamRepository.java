package com.example.quanlysanbong.repositories;

import ch.qos.logback.core.model.INamedModel;
import com.example.quanlysanbong.models.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SanPhamRepository extends JpaRepository<SanPham, Integer> {
}
