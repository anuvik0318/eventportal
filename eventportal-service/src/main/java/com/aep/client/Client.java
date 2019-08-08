package com.aep.client;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name="client_master")
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 30, nullable = false)
	private String firstName;
	@Column(length = 30)
	private String lastName;
	@Column(length = 50)
	private String email;
	@Column(length = 11, nullable = false)
	private String phone;
	
}
