import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationsRoutingModule } from './informations-routing.module';
import { InformationsComponent } from './informations.component';
import { UtilityComponent } from './utility/utility.component';


@NgModule({
  declarations: [
    InformationsComponent,
    UtilityComponent
  ],
  imports: [
    CommonModule,
    InformationsRoutingModule
  ]
})
export class InformationsModule { }
