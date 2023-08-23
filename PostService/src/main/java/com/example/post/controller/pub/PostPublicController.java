package com.example.post.controller.pub;

import com.example.post.dto.post.PostCreateDto;
import com.example.post.dto.post.PostSearchRequestDto;
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
