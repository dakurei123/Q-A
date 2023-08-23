package com.example.authentication.dto;

import com.example.authentication.model.ErrorMessage;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductBaseDto {
    @Length(max = 30, message = ErrorMessage.INVALID_LENGTH)
    @NotBlank(message = ErrorMessage.NOT_BLANK)
    private String name;
    @Length(max = 255, message = ErrorMessage.INVALID_LENGTH)
    @NotBlank(message = ErrorMessage.NOT_BLANK)
    private String description;
    @Range(min = 0, max = 10000, message = ErrorMessage.INVALID_DIGITS)
    @NotNull(message = ErrorMessage.NOT_BLANK)
    private Integer quantity;
}
