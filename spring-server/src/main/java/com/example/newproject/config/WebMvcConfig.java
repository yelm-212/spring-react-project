package com.example.newproject.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebMvcConfig {

    @Bean
    public WebMvcConfigurer corsConfiggurer(){
        return new WebMvcConfigurer() {
            // TODO: CORS Implementation
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                WebMvcConfigurer.super.addCorsMappings(registry);
            }
        };
    }
}
