package com.aclaputra.persona.web.game.persona;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends PagingAndSortingRepository<Persona, Long> {
    @Query("select p from Persona p WHERE p.id = :id")
    public Persona getById(@Param("id") Long id);
    @Query("select p from Persona p")
    Page<Persona> getAllData(Pageable pageable);
}
