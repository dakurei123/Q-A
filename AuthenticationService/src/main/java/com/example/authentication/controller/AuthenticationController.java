package com.example.authentication.controller;

import com.example.authentication.dto.user.*;
import com.example.authentication.repository.UserRepository;
import com.example.authentication.security.JwtTokenProvider;
import com.example.authentication.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
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
