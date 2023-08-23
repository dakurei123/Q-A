package com.example.notification;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class NotificationApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(NotificationApplication.class, args);
    }
}
