package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GetProductDto extends PagingDto{
    private Integer totalElement;
    private List<ProductFullDto> products;
}
