package com.eventportal.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;

@RestController		
public class TestController {
	
	@GetMapping("/test")
	public User get() {
		User user = new User();			
		user.setName("Anvik event portal");
		return user;
	}
	
	class User {
		String name;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}
		
	}
}
