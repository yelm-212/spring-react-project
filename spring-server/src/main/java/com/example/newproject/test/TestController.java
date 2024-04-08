package com.example.newproject.test;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class TestController {

    @GetMapping("/hello")
    public ResponseEntity getTest(){
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
        return ResponseEntity.ok()
                .headers(headers)
                .body("hello");
    }

    @GetMapping("/test")
    public ResponseEntity hello() {
        HttpHeaders headers = new HttpHeaders();

        headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");

//        return "redirect:" + REDIRECTION_URI;
        return ResponseEntity.ok()
                .headers(headers)
                .body(Arrays.asList("hello", "world"));
    }
}
