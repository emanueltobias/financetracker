package com.emanueltobias.financetracker.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emanueltobias.financetracker.api.model.Lancamento;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {

}
