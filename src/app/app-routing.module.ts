import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/components/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'home', loadChildren: () => import('./features/components/home/home.module').then(m => m.HomeModule) },
  { path: 'tourisme', loadChildren: () => import('./features/components/tourisme/tourisme.module').then(m => m.TourismeModule) },
  { path: 'informations', loadChildren: () => import('./features/components/informations/informations.module').then(m => m.InformationsModule) },
  { path: '**', loadChildren: () => import('./features/shared/components/not-found/not-found.module').then(m => m.NotFoundModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
