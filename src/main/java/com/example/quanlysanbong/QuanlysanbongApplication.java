package com.example.quanlysanbong;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
		info = @Info(
				title = "Quản Lý Sân Bóng Project"
		)
)
public class QuanlysanbongApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuanlysanbongApplication.class, args);
	}

}
