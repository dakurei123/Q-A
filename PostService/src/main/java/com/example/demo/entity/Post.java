package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
@Builder
public class Post {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(columnDefinition = "varchar(300)")
    private String title;
    @Column(columnDefinition = "MediumText")
    private String content;
    private Integer createdBy;
    private Date createdAt;
    private Integer updatedAt;
    private Date updatedBy;
    private Boolean isQuestion;
}