package com.example.quanlysanbong.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "NGUOIDUNG")
public class NguoiDung {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NguoiDungID")
    private Integer nguoiDungID;

    @Getter
    @Column(name = "SoDienThoai", unique = true)
    private String soDienThoai;

    @Getter
    @Column(name = "HoTen")
    private String hoTen;

    @Getter
    @Column(name = "PassWord")
    private String passWord;

    @Getter
    @Column(name = "DiaChi")
    private String diaChi;

    @Getter
    @Column(name = "VaiTro")
    private String vaiTro;

    @OneToMany(mappedBy = "nguoiDung")
    private List<DonHang> donHangList;
    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public void setVaiTro(String vaiTro) {
        this.vaiTro = vaiTro;
    }
}