package com.emanueltobias.financetracker.api.repository.lancamento;

import java.util.List;

import com.emanueltobias.financetracker.api.model.Lancamento;
import com.emanueltobias.financetracker.api.repository.filter.LancamentoFilter;

public interface LancamentoRepositoryQuery {

	public  List<Lancamento> filtrar(LancamentoFilter lancamentoFilter);
	
}
