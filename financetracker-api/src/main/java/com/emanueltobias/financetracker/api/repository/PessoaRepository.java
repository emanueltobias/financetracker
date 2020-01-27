package com.emanueltobias.financetracker.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emanueltobias.financetracker.api.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
