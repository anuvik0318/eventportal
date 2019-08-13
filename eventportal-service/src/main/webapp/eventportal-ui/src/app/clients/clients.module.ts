import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientListComponent } from './client-list/clientlist.component';

import { ClientsRoutes } from './clients.routing';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(ClientsRoutes), MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, 
    MatMenuModule, FlexLayoutModule, MatGridListModule],
  declarations: [ClientProfileComponent, ClientListComponent]
})
export class ClientsModule {}
