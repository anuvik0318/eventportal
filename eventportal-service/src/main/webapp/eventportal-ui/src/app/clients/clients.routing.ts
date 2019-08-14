import { Routes } from '@angular/router';

import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientListComponent } from './client-list/clientlist.component';
import { ClientBookingComponent } from './client-booking/client-booking.component';

export const ClientsRoutes: Routes = [{
  path: '',
  redirectTo: 'basic-cards',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'clientprofile',
    component: ClientProfileComponent
  }, {
    path: 'clientlist',
    component: ClientListComponent
  }, {
    path: 'clientbooking',
    component: ClientBookingComponent
  }]
}];
