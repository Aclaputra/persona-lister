package com.aclaputra.persona.web.game.controller;

import com.aclaputra.persona.web.game.character.Character;
import com.aclaputra.persona.web.game.persona.Persona;
import com.aclaputra.persona.web.game.persona.PersonaRepository;
import com.aclaputra.persona.web.game.persona.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/persona")
public class PersonaController {
    @Autowired
    public PersonaService personaService;
    @Autowired
    public PersonaRepository personaRepository;

    public PersonaController(PersonaService personaService, PersonaRepository personaRepository) {
        this.personaService = personaService;
        this.personaRepository = personaRepository;
    }

    @PostMapping("")
    public ResponseEntity<Map> save(@RequestBody Character objModel) {
        Map<String, Object> save = new HashMap<>();
        return new ResponseEntity<Map>(save, HttpStatus.OK);
    }
    @GetMapping("/list")
    public ResponseEntity<Map> list (
            @RequestParam Integer page,
            @RequestParam Integer size,
            @RequestParam(required = false) String status
    ) {
        Pageable show_data = PageRequest.of(page, size);
        Page<Persona> list = null;
//        if (status != null) list = characterRepository.getByStatus(status, show_data);
        list = personaRepository.getAllData(show_data);

        Map<String, Object> map = new HashMap<>();
        map.put("data", list);
        map.put("code", "200");
        map.put("status", "success");

        return new ResponseEntity<Map>(map, new HttpHeaders(), HttpStatus.OK);
    }
}
