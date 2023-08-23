package com.example.demo.controller.pub;

import com.example.demo.dto.post.PostCreateDto;
import com.example.demo.dto.post.PostSearchRequestDto;
import com.example.demo.dto.post.PostUpdateDto;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public")
public class PostPublicController {
    @GetMapping
    public Integer readPost(Authentication authentication, @RequestBody PostCreateDto requestDto) {
        return null;
    }

    @PostMapping("/search")
    public Integer searchPost(Authentication authentication, PostSearchRequestDto requestDto) {
        return null;
    }
}
