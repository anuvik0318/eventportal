import { Component } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :String = '';
  constructor(private  httpClient:HttpClient) {}
  
  ngOnInit() {
       this.getEmployees().subscribe(res => {
        this.title = res["t"];
       });
    }

    public getEmployees(): Observable<JSON>
    {
      const url = '/test';
      return this.httpClient.get<JSON>(url);
    }
}
