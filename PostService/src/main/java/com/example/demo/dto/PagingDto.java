package com.example.demo.dto;

import com.example.demo.model.ErrorMessage;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Range;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PagingDto {
    @NotNull(message = ErrorMessage.NOT_BLANK)
    private Integer pageIndex;
    @NotNull(message = ErrorMessage.NOT_BLANK)
    private Integer pageSize;

    public void validatePage() {
        if (pageIndex == null || pageIndex < 0)
            pageIndex = 1;
        if (pageSize == null || pageSize < 0)
            pageSize = 20;
        if (pageSize > 50)
            pageSize = 50;
    }
}
