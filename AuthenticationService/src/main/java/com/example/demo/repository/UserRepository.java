package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findOneByEmail(String email);

    User findOneById(Integer userId);

    @Modifying
    @Query("update User u set u.countLoginFail = u.countLoginFail + 1 where u.id = :id")
    void increaseCountLogin(int id);

    @Modifying
    @Query("update User u set u.countLoginFail = 0 where u.id = :id")
    void resetCountLogin(int id);

}
