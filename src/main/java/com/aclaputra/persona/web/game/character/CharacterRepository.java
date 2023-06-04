package com.aclaputra.persona.web.game.character;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepository extends PagingAndSortingRepository<Character, Long> {
    @Query("select c from Character c WHERE c.id = :id")
    public Character getById(@Param("id") Long id);
    @Query("select c from Character c")
    Page<Character> getAllData(Pageable pageable);
}
