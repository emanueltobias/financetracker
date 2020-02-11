package com.emanueltobias.financetracker.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.emanueltobias.financetracker.api.config.property.FinancetrackerApiProperty;

@SpringBootApplication
@EnableConfigurationProperties(FinancetrackerApiProperty.class)
public class FinancetrackerApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinancetrackerApiApplication.class, args);
	}

}
