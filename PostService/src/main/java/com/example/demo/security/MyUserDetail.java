package com.example.demo.security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Getter
@Setter
public class MyUserDetail extends User {
    private com.example.demo.entity.User user;

    private Integer id;

    public MyUserDetail(com.example.demo.entity.User user, Integer id, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.user = user;
        this.id = id;
    }
}
