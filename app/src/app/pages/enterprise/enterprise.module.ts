import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { 
  MatCardModule, 
  MatFormFieldModule, 
  MatIconModule, 
  MatInputModule, 
  MatProgressBarModule, 
  MatTooltipModule 
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from 'src/app/core/core.module';

import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';


export const EnterpriseRoutes: Routes = [
  {
    path: 'enterprise',
    component: EnterpriseComponent
  }
];

@NgModule({
  declarations: [EnterpriseComponent],
  providers: [EnterpriseService],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    FlexLayoutModule,
    CoreModule
  ],
})
export class EnterpriseModule {}
