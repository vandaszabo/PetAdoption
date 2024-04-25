package com.codecool.petadoption.services;

import com.codecool.petadoption.models.QuizQuestion;
import com.codecool.petadoption.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    private final QuestionRepository questionRepository;

    @Autowired
    public QuizService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public List<QuizQuestion> getQuizQuestions() {
        return questionRepository.findAll();
    }

    public String submitUserResponse(UserResponse userResponse) {
        // Logic to process user response and calculate result
    }

    public QuizResult getQuizResult(long userId) {
        // Logic to retrieve quiz result for a user
    }
}
