package com.codecool.petadoption.transfer;

import com.codecool.petadoption.enums.AnimalType;
import com.codecool.petadoption.enums.Gender;

public record PetCreateDto(AnimalType type, String breed, Gender gender, int age) {
}


