import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourismeRoutingModule } from './tourisme-routing.module';
import { TourismeComponent } from './tourisme.component';


@NgModule({
  declarations: [
    TourismeComponent
  ],
  imports: [
    CommonModule,
    TourismeRoutingModule
  ]
})
export class TourismeModule { }
