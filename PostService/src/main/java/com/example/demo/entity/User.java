package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@Data
public class User {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String avatar;
    private Integer countLoginFail;
    private String role;
    private Integer status;
}
