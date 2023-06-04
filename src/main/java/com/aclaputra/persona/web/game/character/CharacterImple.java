package com.aclaputra.persona.web.game.character;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class CharacterImple implements CharacterService{
    @Override
    public Map<String, Object> save(Character obj) {
        Map<String, Object> map = new HashMap<>();
        try {
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }
}
