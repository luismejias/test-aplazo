import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { CharacterTableComponent } from './components/character-table/character-table.component';
import { SharedUiModule } from '@bs-shared-ui';


@NgModule({
  declarations: [
    CharacterPageComponent,
    CharacterTableComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedUiModule,
  ]
})
export class CharacterModule { }
