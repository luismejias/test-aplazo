import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';

const episodeRoutes: Routes = [
  { path: '', component: EpisodePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(episodeRoutes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
