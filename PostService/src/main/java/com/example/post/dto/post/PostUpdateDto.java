package com.example.post.dto.post;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostUpdateDto extends PostCreateDto {
    private Integer id;
}
