package com.codecool.petadoption.services;

import com.codecool.petadoption.models.Pet;
import com.codecool.petadoption.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {

    private final PetRepository petRepository;

    @Autowired
    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    public Optional<Pet> getPetById(long id) {
        return petRepository.findById(id);
    }

    public boolean addPet(Pet pet) {
        petRepository.save(pet);
        return true;
    }

    public void deletePet(Pet pet) {
        petRepository.delete(pet);
    }

    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }


}
