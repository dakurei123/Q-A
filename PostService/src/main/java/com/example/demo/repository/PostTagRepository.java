package com.example.demo.repository;

import com.example.demo.entity.PostTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostTagRepository extends JpaRepository<PostTag, PostTag.PostTagPK> {
}
