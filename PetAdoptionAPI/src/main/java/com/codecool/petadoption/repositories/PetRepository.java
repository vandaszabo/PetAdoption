package com.codecool.petadoption.repositories;

import com.codecool.petadoption.enums.AnimalType;
import com.codecool.petadoption.enums.Gender;
import com.codecool.petadoption.models.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> findByGender(Gender gender);

    List<Pet> findByType(AnimalType type);
}
