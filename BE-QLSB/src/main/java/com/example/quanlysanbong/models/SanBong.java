package com.example.quanlysanbong.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Entity
@Table(name = "SanBong")
@Data
public class SanBong {
    @Id
    @Column(name = "SanBongID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sanBongID;

    @Getter
    @Column(name = "Gia")
    private Integer gia;

    @Column(name = "TenSan")
    private String tenSan;

    @OneToMany(mappedBy = "sanBong")
    private List<ChiTietDatSan> chiTietDatSanList;

    public void setSanBongID(Integer sanBongID) {
        this.sanBongID = sanBongID;
    }

    public void setGia(Integer gia) {
        this.gia = gia;
    }

    public void setTenSan(String tenSan) {
        this.tenSan = tenSan;
    }
}
