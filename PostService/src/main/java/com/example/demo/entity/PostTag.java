package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
@Builder
public class PostTag {
    @EmbeddedId
    private PostTagPK id;

    @Embeddable
    @Getter
    @Setter
    @EqualsAndHashCode
    @NoArgsConstructor
    public static class PostTagPK implements Serializable {
        @Serial
        private static final long serialVersionUID = 1L;

        public PostTagPK(Integer postId, Integer tagId) {
            this.postId = postId;
            this.tagId = tagId;
        }

        private Integer postId;
        private Integer tagId;
    }

}
