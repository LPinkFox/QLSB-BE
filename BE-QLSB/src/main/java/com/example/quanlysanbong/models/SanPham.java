package com.example.quanlysanbong.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "SANPHAM")
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SanPhamID")
    private Integer sanPhamID;

    @Column(name = "Gia")
    private Integer gia;

    @Column(name = "SoLuongConLai")
    private Integer soLuong;

    @Column(name = "TenSanPham", columnDefinition = "NVARCHAR(200)")
    private String ten;

    @OneToMany(mappedBy = "sanPham")
    private List<ChiTietDonHang> chiTietDonHangList;
}
