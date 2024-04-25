package com.codecool.petadoption.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class UserResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(mappedBy = "userResponse", cascade = CascadeType.ALL)
    private List<QuizOption> selectedOptions;
}
