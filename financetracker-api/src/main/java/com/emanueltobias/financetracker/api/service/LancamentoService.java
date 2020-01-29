package com.emanueltobias.financetracker.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emanueltobias.financetracker.api.model.Lancamento;
import com.emanueltobias.financetracker.api.model.Pessoa;
import com.emanueltobias.financetracker.api.repository.LancamentoRepository;
import com.emanueltobias.financetracker.api.repository.PessoaRepository;
import com.emanueltobias.financetracker.api.service.exception.PessoaInexistenteOuInativaException;

@Service
public class LancamentoService {
	
	@Autowired
	private  PessoaRepository pessoaRepository;
	
	@Autowired
	private LancamentoRepository lancamentoRepository;

	public Lancamento salvar(Lancamento lancamento) {
 		Pessoa pessoa = pessoaRepository.findOne(lancamento.getPessoa().getCodigo());
 		if (pessoa == null || pessoa.isInativo()) {
 			throw new PessoaInexistenteOuInativaException();
 		}
 		return lancamentoRepository.save(lancamento);
	}

}
