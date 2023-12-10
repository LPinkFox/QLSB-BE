package com.example.quanlysanbong.repositories;

import com.example.quanlysanbong.models.SanBong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SanBongRepository extends JpaRepository<SanBong, Integer> {
}
