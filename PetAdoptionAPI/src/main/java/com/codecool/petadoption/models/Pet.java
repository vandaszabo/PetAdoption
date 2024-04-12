package com.codecool.petadoption.models;

import com.codecool.petadoption.enums.AnimalType;
import com.codecool.petadoption.enums.Gender;
import jakarta.persistence.*;

@Entity
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private AnimalType type;
    private String breed;
    private Gender gender;
    private int age;

    public Pet(AnimalType type, String breed, Gender gender, int age) {
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.age = age;
    }

    public Pet() {}
}