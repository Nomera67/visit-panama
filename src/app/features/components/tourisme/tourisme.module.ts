import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourismeRoutingModule } from './tourisme-routing.module';
import { TourismeComponent } from './tourisme.component';
import { InvitationComponent } from './invitation/invitation.component';



@NgModule({
  declarations: [
    TourismeComponent,
    InvitationComponent,
  ],
  imports: [
    CommonModule,
    TourismeRoutingModule
  ]
})
export class TourismeModule { 

  
}
