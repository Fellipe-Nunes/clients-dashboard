import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatCardModule, 
  MatIconModule 
} from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';

import { OverviewBoxComponent } from './overview-box/overview-box.component';
import { EmptyListComponent } from './empty-list/empty-list.component';

@NgModule({
  declarations: [
    OverviewBoxComponent,
    EmptyListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    OverviewBoxComponent,
    EmptyListComponent,
  ]
})
export class CoreModule { }
