package com.example.quanlysanbong.models;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
@Table(name = "ChiTietDatSan")
public class ChiTietDatSan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ChiTietDatSanID")
    private Integer chiTietDatSanID;

    @Column(name = "Kip")
    private Integer kip;

    @Column(name = "Ngay")
    private Date ngay;

    @ManyToOne
    @JoinColumn(name = "SanBong_ID")
    private SanBong sanBong;

    @OneToOne
    @JoinColumn(name = "DonHang_ID")
    private DonHang donHang;
}
