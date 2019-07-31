import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from  "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :String = '';
  constructor(private  httpClient:HttpClient) {}
  
  ngOnInit() {
      this.httpClient.get<String>('/test').subscribe(res => {
        this.title = res["name"];
       });
    }

    public getEmployees(): Observable<JSON>
    {
      const url = '/test';
      return this.httpClient.get<JSON>(url);
    }
}
