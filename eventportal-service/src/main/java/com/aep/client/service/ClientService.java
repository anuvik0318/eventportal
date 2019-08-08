package com.aep.client.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aep.client.model.Client;
import com.aep.client.repository.ClientDao;

@Service
public class ClientService {
	
	@Autowired
	private ClientDao clientDao;
	
	public List<Client> getByFirstName() {
		Client c = null;
		//c = clientDao.findByFirstName("Saritha");
		return clientDao.findAll();
	}
}
