package com.codecool.petadoption.models;

import com.codecool.petadoption.enums.AnimalType;
import com.codecool.petadoption.enums.Gender;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private AnimalType type;
    private String breed;
    private Gender gender;
    private int age;

}