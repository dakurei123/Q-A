package com.example.demo.controller;

import com.example.demo.dto.post.PostCreateDto;
import com.example.demo.dto.post.PostUpdateDto;
import com.example.demo.dto.post.PostSearchRequestDto;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
public class PostController {
    @PostMapping
    public Integer createPost(Authentication authentication, @RequestBody PostCreateDto requestDto) {
        return null;
    }

    @PutMapping
    public Integer updatePost(Authentication authentication, @RequestBody PostUpdateDto requestDto) {
        return null;
    }

    @DeleteMapping
    public Integer deletePost(Authentication authentication, @RequestParam Integer id) {
        return null;
    }
}
