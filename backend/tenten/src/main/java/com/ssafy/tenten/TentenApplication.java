package com.ssafy.tenten;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.persistence.EntityManager;

@SpringBootApplication
public class TentenApplication {

	public static void main(String[] args) {
		SpringApplication.run(TentenApplication.class, args);
	}

	@Bean
	public static ModelMapper modelMapper(){
		return new ModelMapper();
	}

	@Bean
	JPAQueryFactory jpaQueryFactory(EntityManager em) {
		return new JPAQueryFactory(em);
	}

}
