package com.aclaputra.persona.web.game.character;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "characters")
public class Character {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "character_name", length = 100, unique = true)
    private String name;
    @Column(name = "character_location",  length = 100, unique = false)
    private String location;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "character{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Character character = (Character) o;
        return Objects.equals(id, character.id) && Objects.equals(name, character.name) && Objects.equals(location, character.location);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, location);
    }
}
