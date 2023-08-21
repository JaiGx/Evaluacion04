package com.example.evaluacion04;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class Evaluacion04Application {

	public static void main(String[] args) {
		SpringApplication.run(Evaluacion04Application.class, args);
	}
	@Configuration
    class CorsConfig implements WebMvcConfigurer {
//,jh
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("https://jubilant-space-trout-vx77677w55426pj-3000.app.github.dev/")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
        } 

    }
}