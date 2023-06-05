package com.aclaputra.persona.web.game.seeder;

import com.aclaputra.persona.web.game.character.Character;
import com.aclaputra.persona.web.game.character.CharacterRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Component
@Service
public class DatabaseSeeder implements ApplicationRunner {
    @Autowired
    private CharacterRepository characterRepository;
    private static final String TAG = "DatabaseSeeder {}";
    private Logger logger = LoggerFactory.getLogger(DatabaseSeeder.class);


    private String[] characters = new String[] {
            "Makoto Yuki,Gekkoukan High School,https://static.wikia.nocookie.net/megamitensei/images/c/c6/Protagonist_%28Male%29.png/revision/latest/scale-to-width-down/177?cb=20230205052924",
            "Kotone Shiomi,Gekkoukan High School,https://static.wikia.nocookie.net/megamitensei/images/3/31/Protagonist_%28Female%29.png/revision/latest/scale-to-width-down/164?cb=20230205052924"
    };

    @Override
    @Transactional
    public void run(ApplicationArguments args) throws Exception {
        this.insertCharacters();
    }

    @Transactional
    public void insertCharacters() {
        for (String character : characters) {
            String[] str = character.split(",", 0);
            String name = str[0];
            String location = str[1];
            String image = str[2];

            Character oldChar = characterRepository.findByName(name);
            System.out.println(oldChar);
            if (oldChar == null) {
                oldChar = new Character();
                oldChar.setName(name);
                oldChar.setLocation(location);
                oldChar.setImage(image);
            }
            characterRepository.save(oldChar);
        }
    }

}
