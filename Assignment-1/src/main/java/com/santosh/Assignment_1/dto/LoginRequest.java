package com.santosh.Assignment_1.dto; // Ensure it's in the correct package

import com.santosh.Assignment_1.model.Role;

public class LoginRequest {
    private String username;
    private String password;
    private Role role; // Enum for user roles

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword(String username) {
        this.username = username;
        
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
