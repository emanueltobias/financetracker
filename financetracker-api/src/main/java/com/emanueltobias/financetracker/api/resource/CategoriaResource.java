package com.emanueltobias.financetracker.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emanueltobias.financetracker.api.model.Categoria;
import com.emanueltobias.financetracker.api.repository.CategoriaRepository;

@RestController
@RequestMapping("/categorias")
public class CategoriaResource {
		
		@Autowired
		private CategoriaRepository categoriarepository;
		
		@GetMapping
		public List<Categoria> listar() {
			return  categoriarepository.findAll();
		}
}
