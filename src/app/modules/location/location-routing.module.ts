import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationPageComponent } from './components/location-page/location-page.component';

const locationRoutes: Routes = [
  { path: '', component: LocationPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(locationRoutes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
