// package com.santosh.Assignment_1;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.RestController;
// import com.santosh.Assignment_1.model.Person;
// import com.santosh.Assignment_1.repo.PersonRepo;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.http.ResponseEntity;

// @RestController
// @CrossOrigin(origins = "http://localhost:5173")
// public class PersonController {

//     @Autowired
//     PersonRepo repo;

    
//     @PostMapping("/addPerson")
//     public ResponseEntity<String> addPerson(@RequestBody Person person) {
//         try {
//             repo.save(person);
//             return ResponseEntity.ok("Person added successfully");
//         } catch (Exception e) {
//             return ResponseEntity.status(500).body("Error adding person: " + e.getMessage());
//         }
//     }
// }
