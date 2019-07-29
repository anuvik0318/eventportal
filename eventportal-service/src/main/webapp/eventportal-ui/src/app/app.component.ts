import { Component } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :String = 'Anvik Event Portal';
  constructor(private  httpClient:HttpClient) {}
  
  ngOnInit() {
       this.getEmployees().subscribe(res => {
        this.title = res;
       });
    }

    public getEmployees(): Observable<String>
    {
      const url = 'http://localhost:8080/test';
      return this.httpClient.get<String>(url);
    }
}
