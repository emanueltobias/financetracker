package com.emanueltobias.financetracker.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emanueltobias.financetracker.api.model.Categoria;
				
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
