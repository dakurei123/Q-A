package com.example.post.repository;

import com.example.post.entity.PostTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostTagRepository extends JpaRepository<PostTag, PostTag.PostTagPK> {
}
