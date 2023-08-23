package com.example.post.security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Getter
@Setter
public class MyUserDetail extends User {
    private com.example.post.entity.User user;

    private Integer id;

    public MyUserDetail(com.example.post.entity.User user, Integer id, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.user = user;
        this.id = id;
    }
}
