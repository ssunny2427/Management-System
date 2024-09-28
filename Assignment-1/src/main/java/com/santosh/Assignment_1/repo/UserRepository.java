package com.santosh.Assignment_1.repo;

import com.santosh.Assignment_1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
