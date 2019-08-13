import { Component, OnInit,ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'ms-client-profile',
    templateUrl:'./client-profile-component.html',
    styleUrls: ['./client-profile-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClientProfileComponent implements OnInit {
  booking: Boolean = false;
  constructor() {}

  ngOnInit() {

  }
  
  loadBooking(value: Boolean){
    this.booking = value;
  }
}



