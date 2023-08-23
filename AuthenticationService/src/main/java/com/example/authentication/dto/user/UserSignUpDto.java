package com.example.authentication.dto.user;

import com.example.authentication.model.ErrorMessage;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class UserSignUpDto extends UserBaseDto {
    @NotBlank(message = ErrorMessage.NOT_BLANK)
    private String password;
}
