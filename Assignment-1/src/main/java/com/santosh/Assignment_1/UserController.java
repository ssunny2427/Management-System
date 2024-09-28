package com.santosh.Assignment_1;

import com.santosh.Assignment_1.model.User;
import com.santosh.Assignment_1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
// @RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/api/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        User user = userService.fetchUserByUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build(); 
        }
        return ResponseEntity.ok(user); 
    }
}
