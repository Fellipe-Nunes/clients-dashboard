import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes } from '@angular/router';

import { 
  MatButtonModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatIconModule, 
  MatInputModule, 
  MatProgressBarModule, 
  MatTooltipModule 
} from '@angular/material';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from 'src/app/core/core.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'client/:_id',
    component: ClientDetailComponent
  }
];

@NgModule({
  declarations: [
    ClientComponent, 
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    FlexLayoutModule,
    CoreModule

  ],
  providers: [ClientService]
})
export class ClientModule {}
