package com.example.demo.controller;

import com.example.demo.dto.GetProductDto;
import com.example.demo.dto.PagingDto;
import com.example.demo.dto.ProductBaseDto;
import com.example.demo.exception.ApiException;
import com.example.demo.model.ErrorMessage;
import com.example.demo.security.MyUserDetail;
import com.example.demo.service.ProductService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestWrapper;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

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
