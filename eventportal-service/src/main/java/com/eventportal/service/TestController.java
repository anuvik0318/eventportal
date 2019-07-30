package com.eventportal.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;

@RestController		
public class TestController {
	
	@GetMapping("/test")
	public ResponseEntity<String> get() {
		JsonObject jsonResponse = new JsonObject();			
		jsonResponse.addProperty("t", "Anvik Event Portal");
		return new ResponseEntity<String>(jsonResponse.toString(), HttpStatus.OK);
	}
}
