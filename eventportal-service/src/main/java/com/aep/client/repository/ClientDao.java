package com.aep.client.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aep.client.model.Client;

@Repository
public interface ClientDao extends JpaRepository<Client, Long>{
	Client findByFirstName(String name);
}
