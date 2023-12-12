package com.example.quanlysanbong.controllers;

import com.example.quanlysanbong.models.NguoiDung;
import com.example.quanlysanbong.services.NguoiDungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/NguoiDung")
public class NguoiDungController {
    @Autowired
    private NguoiDungService nguoiDungService;

    @PostMapping("/Login")
    public ResponseEntity<NguoiDung> login(@RequestBody NguoiDung nguoiDung){
        NguoiDung nguoiDungcur = nguoiDungService.Login(nguoiDung.getSoDienThoai());
        if (nguoiDungcur == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }else{
            if (!nguoiDungcur.getPassWord().equals(nguoiDung.getPassWord())){
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }else{
                return new ResponseEntity<>(nguoiDungcur, HttpStatus.OK);
            }
        }
    }
    @PostMapping("/SignUp")
    public ResponseEntity<NguoiDung> signUp(@RequestBody NguoiDung nguoiDung){
        nguoiDungService.signUp(nguoiDung);
        return new ResponseEntity(nguoiDung,HttpStatus.OK);
    }
}
