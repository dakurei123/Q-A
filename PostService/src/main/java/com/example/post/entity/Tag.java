package com.example.post.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
@Builder
public class Tag {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
}