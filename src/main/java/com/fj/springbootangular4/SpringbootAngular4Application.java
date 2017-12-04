package com.fj.springbootangular4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.fj"})
public class SpringbootAngular4Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAngular4Application.class, args);

//        BaseRegistrationService service = (BaseRegistrationService) context.getBean(RegistrationServiceImpl.class);
    }
}
