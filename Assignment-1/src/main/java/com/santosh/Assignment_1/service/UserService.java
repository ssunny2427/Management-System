package com.santosh.Assignment_1.service;

import com.santosh.Assignment_1.model.User;
import com.santosh.Assignment_1.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User fetchUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
