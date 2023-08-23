package com.example.authentication.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GetProductDto extends PagingDto{
    private Integer totalElement;
    private List<ProductFullDto> products;
}
