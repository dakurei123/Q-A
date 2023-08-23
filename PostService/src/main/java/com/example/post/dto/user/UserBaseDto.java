package com.example.post.dto.user;

import com.example.post.model.ErrorMessage;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserBaseDto {
    @NotBlank(message = ErrorMessage.NOT_BLANK)
    private String firstName;
    @NotBlank(message = ErrorMessage.NOT_BLANK)
    private String lastName;
    @NotBlank(message = ErrorMessage.NOT_BLANK)
    private String email;
}
