package com.example.authentication.dto.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto extends UserBaseDto{
    private String refreshToken;
    private String accessToken;
}
