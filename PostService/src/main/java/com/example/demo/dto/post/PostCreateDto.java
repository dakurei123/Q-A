package com.example.demo.dto.post;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PostCreateDto extends PostBaseDto {
    private List<Integer> tagidList;
}
