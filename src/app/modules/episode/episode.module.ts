import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';
import { SharedUiModule } from '@bs-shared-ui';


@NgModule({
  declarations: [
    EpisodePageComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    SharedUiModule
  ]
})
export class EpisodeModule { }
