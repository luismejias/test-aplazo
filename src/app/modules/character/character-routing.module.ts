import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './components/character-page/character-page.component';

const characterRoutes: Routes = [
  { path: '', component: CharacterPageComponent }
];
@NgModule({
  imports: [RouterModule.forChild(characterRoutes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
