package com.example.demo.dto.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto extends UserBaseDto{
    private String refreshToken;
    private String accessToken;
}
