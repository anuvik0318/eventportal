package com.eventportal.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name="sys_user")
public class User {
	@Id
	@GeneratedValue
	private int id;
	private String first_name;
	private String last_name;
	private String email;
	private String user_name;
	private String password;
	private String phone;
	
}
