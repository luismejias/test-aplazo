import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { SharedUiModule } from '@bs-shared-ui';


@NgModule({
  declarations: [
    LocationPageComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    SharedUiModule
  ]
})
export class LocationModule { }
