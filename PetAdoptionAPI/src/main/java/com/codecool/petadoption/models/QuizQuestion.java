package com.codecool.petadoption.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class QuizQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String question;

    @OneToMany(mappedBy = "quizQuestion", cascade = CascadeType.ALL)
    private List<QuizOption> options;
}
