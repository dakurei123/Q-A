package com.example.demo.dto;

import com.example.demo.entity.Product;
import lombok.Data;

@Data
public class ProductFullDto extends ProductBaseDto {
    private Integer id;

    public ProductFullDto(Product product) {
        super(product.getName(), product.getDescription(), product.getQuantity());
        this.id = product.getId();
    }
}
