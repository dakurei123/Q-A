package com.example.demo.controller;

import com.example.demo.dto.user.*;
import com.example.demo.entity.User;
import com.example.demo.exception.ApiException;
import com.example.demo.model.ErrorMessage;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtTokenProvider;
import com.example.demo.service.AuthenticationService;
import com.example.demo.utils.ConvertUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationService authenticationService;

    public AuthenticationController() {
    }

    @PostMapping("login")
    public UserResponseDto login(@Valid @RequestBody UserLoginDto dto, HttpServletResponse response) {
        return authenticationService.login(dto, response);
    }

    @PostMapping("signup")
    public Boolean signUp(@Valid @RequestBody UserSignUpDto dto) {
        return authenticationService.signup(dto);
    }

    @PostMapping("refresh-token")
    public TokenResponse refreshToken(HttpServletRequest request, HttpServletResponse response) {
        return authenticationService.refreshToken(request, response);
    }
}
