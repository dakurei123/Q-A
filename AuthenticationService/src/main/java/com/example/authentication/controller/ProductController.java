package com.example.authentication.controller;

import com.example.authentication.dto.GetProductDto;
import com.example.authentication.dto.PagingDto;
import com.example.authentication.dto.ProductBaseDto;
import com.example.authentication.security.MyUserDetail;
import com.example.authentication.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("product")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping
    public Integer addProduct(
//            SecurityContextHolderAwareRequestWrapper httpServletRequest,
            Authentication authentication, @RequestBody @Valid ProductBaseDto requestDto) {
        System.out.println(authentication);
        String username = ((MyUserDetail) SecurityContextHolder
                .getContext().getAuthentication().getPrincipal()).getUsername();
        return productService.addProduct(requestDto, username);
    }

    @PostMapping("search")
    public GetProductDto getProduct(Authentication authentication, @Valid @RequestBody PagingDto requestDto) {
        return productService.searchProduct(requestDto);
    }
}
