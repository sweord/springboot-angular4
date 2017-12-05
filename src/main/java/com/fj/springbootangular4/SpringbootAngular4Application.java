package com.fj.springbootangular4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.fj")
@EntityScan("com.fj.entity")
@EnableJpaRepositories("com.fj.dao")
public class SpringbootAngular4Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAngular4Application.class, args);
    }
}
