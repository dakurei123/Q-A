package com.example.demo.dto.post;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostBaseDto {
    private String title;
    private String content;
    private Boolean isQuestion;
}
