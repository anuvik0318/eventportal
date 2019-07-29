package com.eventportal.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController		
@CrossOrigin("http://localhost:4200")
public class TestController {
	
	@GetMapping("/test")
	@ResponseBody
	public ResponseEntity<String> get() {
		return new ResponseEntity<String>("Anvik Event Portal", HttpStatus.OK);
	}
}
