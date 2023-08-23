package com.example.authentication.service;

import com.example.authentication.dto.GetProductDto;
import com.example.authentication.dto.PagingDto;
import com.example.authentication.dto.ProductBaseDto;
import com.example.authentication.dto.ProductFullDto;
import com.example.authentication.entity.Product;
import com.example.authentication.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Integer addProduct(ProductBaseDto requestDto, String username) {
        Product product = new Product(requestDto, username);
        productRepository.save(product);
        return product.getId();
    }

    public GetProductDto searchProduct(PagingDto requestDto) {
        requestDto.validatePage();
        List<Product> productList = productRepository.getWithPage();
        List<ProductFullDto> productFullDtoList = new ArrayList<>();
        for (Product product : productList) {
            productFullDtoList.add(new ProductFullDto(product));
        }
        Integer totalElement = Math.toIntExact(productRepository.count());

        GetProductDto responseDto = new GetProductDto();
        responseDto.setPageIndex(requestDto.getPageIndex());
        responseDto.setPageSize(requestDto.getPageSize());
        responseDto.setProducts(productFullDtoList);
        responseDto.setTotalElement(totalElement);

        return responseDto;
    }
}
