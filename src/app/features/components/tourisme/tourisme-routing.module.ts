import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourismeComponent } from './tourisme.component';

const routes: Routes = [{ path: '', component: TourismeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourismeRoutingModule { }
