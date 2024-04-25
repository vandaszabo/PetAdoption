package com.codecool.petadoption.repositories;

import com.codecool.petadoption.models.QuizQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<QuizQuestion, Long> {

}
