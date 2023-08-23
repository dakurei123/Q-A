package com.example.demo.service;

import com.example.demo.dto.user.*;
import com.example.demo.entity.User;
import com.example.demo.exception.ApiException;
import com.example.demo.model.ErrorMessage;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtTokenProvider;
import com.example.demo.utils.ConvertUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public UserResponseDto login(UserLoginDto dto, HttpServletResponse response) {
        User user = userRepository.findOneByEmail(dto.getEmail());
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword()));
        } catch (LockedException ex) {
            throw new ApiException(ErrorMessage.ACCOUNT_LOCK, dto.getEmail());
        } catch (BadCredentialsException e) {
            if (user != null) {
                userRepository.increaseCountLogin(user.getId());
                if (user.getCountLoginFail() == 4)
                    throw new ApiException(ErrorMessage.ACCOUNT_LOCK, dto.getEmail());
            }
            throw new ApiException(ErrorMessage.USER_NOT_FOUND, dto.getEmail() + " " + (user != null ? user.getCountLoginFail() + 1 : 0));
        }

        userRepository.resetCountLogin(user.getId());
        TokenResponse tokenResponse = setCookieToken(user, response);
        UserResponseDto responseDto = ConvertUtils.convert(user, UserResponseDto.class);
        responseDto.setAccessToken(tokenResponse.getAccessToken());
        responseDto.setRefreshToken(tokenResponse.getRefreshToken());
        return responseDto;
    }

    @Transactional
    public Boolean signup(UserSignUpDto dto) {
        User user = userRepository.findOneByEmail(dto.getEmail());
        if (user != null)
            throw new ApiException(ErrorMessage.USER_EXISTED, dto.getEmail());
        user = ConvertUtils.convert(dto, User.class);
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setCountLoginFail(0);
        userRepository.save(user);
        return true;
    }

    public TokenResponse refreshToken(HttpServletRequest request, HttpServletResponse response) {
        Integer userId = getUserIdFromRefreshToken(request);
        User user = userRepository.findOneById(userId);
        if (user == null)
            throw new ApiException(ErrorMessage.INVALID_TOKEN);
        return setCookieToken(user, response);
    }

    private Integer getUserIdFromRefreshToken(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null)
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("refresh-token"))
                    try {
                        return jwtTokenProvider.getUserIdFromJWT(cookie.getValue());
                    } catch (Exception e) {
                        throw new ApiException(ErrorMessage.INVALID_TOKEN);
                    }
            }
        throw new ApiException(ErrorMessage.INVALID_TOKEN);
    }

    private TokenResponse setCookieToken(User user, HttpServletResponse response) {
        String refreshToken = jwtTokenProvider.generateRefreshToken(user);
        Cookie cookie = new Cookie("refresh-token", refreshToken);
        cookie.setMaxAge(60 * 60 * 24 * 30);
        cookie.setHttpOnly(true);
        response.addCookie(cookie);

        String accessToken = jwtTokenProvider.generateAccessToken(user);
        Cookie cookie2 = new Cookie("access-token", accessToken);
        cookie2.setMaxAge(60 * 5);
        cookie2.setHttpOnly(true);
        response.addCookie(cookie2);

        return TokenResponse.builder().refreshToken(refreshToken).accessToken(accessToken).build();
    }
}
