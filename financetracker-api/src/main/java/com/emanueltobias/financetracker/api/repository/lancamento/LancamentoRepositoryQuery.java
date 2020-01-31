package com.emanueltobias.financetracker.api.repository.lancamento;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.emanueltobias.financetracker.api.model.Lancamento;
import com.emanueltobias.financetracker.api.repository.filter.LancamentoFilter;

public interface LancamentoRepositoryQuery {

	public  Page<Lancamento> filtrar(LancamentoFilter lancamentoFilter, Pageable pageable);
	
}
