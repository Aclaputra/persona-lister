package com.aclaputra.persona.web.game.persona;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class PersonaImple implements PersonaService{
    @Override
    public Map<String, Object> save(Persona obj) {
        Map<String, Object> map = new HashMap<>();
        try {

        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }
}
