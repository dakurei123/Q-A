package com.example.authentication.entity;

import com.example.authentication.dto.ProductBaseDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Product {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String description;
    private Integer quantity;
    private String createdBy;
    private Date createdAt;

    public Product (ProductBaseDto dto, String username){
        this.name = dto.getName();
        this.description = dto.getDescription();
        this.quantity = dto.getQuantity();
        this.createdBy = username;
        this.createdAt = new Date();
    }
}