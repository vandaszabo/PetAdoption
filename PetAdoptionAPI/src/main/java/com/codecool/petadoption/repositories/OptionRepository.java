package com.codecool.petadoption.repositories;

import com.codecool.petadoption.models.Pet;
import com.codecool.petadoption.models.QuizOption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OptionRepository extends JpaRepository<QuizOption, Long> {
}
