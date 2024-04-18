package com.codecool.petadoption.controllers;

import com.codecool.petadoption.models.Pet;
import com.codecool.petadoption.services.PetService;
import com.codecool.petadoption.transfer.PetCreateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Pet")
public class PetController {

    private final PetService petService;

    @Autowired
    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPet(@PathVariable long id) {
        try {
            Optional<Pet> pet = petService.getPetById(id);
            return pet.map(value -> ResponseEntity.status(HttpStatus.OK).body(value))
                    .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/Create")
    public ResponseEntity<Pet> createPet(@RequestBody PetCreateDto request) {
        try {
            Pet newPet = new Pet(request.type(), request.breed(), request.gender(), request.age());
            boolean isCreated = petService.addPet(newPet);
            if(isCreated) {
                return ResponseEntity.status(HttpStatus.CREATED).body(newPet);
            }else{
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/List")
    public ResponseEntity<List<Pet>> getAllPets() {
        try {
            List<Pet> pets = petService.getAllPets();
            return ResponseEntity.status(HttpStatus.OK).body(pets);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<?> deletePet(@PathVariable long id) {
        try {
            Optional<Pet> pet = petService.getPetById(id);
            pet.ifPresent(petService::deletePet);
            return ResponseEntity.status(HttpStatus.OK).body("Pet [id - " + id + "] is deleted successfully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }





}
