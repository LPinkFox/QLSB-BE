package com.example.quanlysanbong.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "ChiTietDonHang")
public class ChiTietDonHang {
    @Id
    @Column(name = "ChiTietDonHangID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chiTietDonHangID;

    @Column(name = "SoLuongSanPham")
    private Integer soLuongSanPham;

    @ManyToOne
    @JoinColumn(name = "DonHang_ID")
    private DonHang donHang;

    @ManyToOne
    @JoinColumn(name = "SanPham_ID")
    private SanPham sanPham;

}
