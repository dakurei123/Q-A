package com.example.post.dto.post;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostSearchRequestDto {
    private Integer createdBy;
    private String keyword;
    private Integer tagId;
}
