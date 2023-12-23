package com.example.quanlysanbong.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "DonHang")
@Data
public class DonHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DonHangID")
    private Integer donHangID;

    @Column(name = "TongTien")
    private Integer tongTien;

    @Column(name = "TrangThai")
    private String trangThai;

    @ManyToOne
    @JoinColumn(name = "NguoiDung_ID")
    private NguoiDung nguoiDung;

    @OneToMany(mappedBy = "donHang")
    private List<ChiTietDonHang> chiTietDonHangList;

    @OneToOne(mappedBy = "donHang")
    private ChiTietDatSan chiTietDatSan;
}
