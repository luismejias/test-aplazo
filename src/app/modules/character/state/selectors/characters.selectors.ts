import { createSelector } from '@ngrx/store';
import { CharacterState } from '../../models';
import { AppState } from '../app.state';

// TODO es el selector que tiene relación con la propiedad "characters" del state
//TODO : PADRE
export const selectCharactersFeature = (state: AppState) => state.characters;
 
export const selectCharactersList = createSelector(
  selectCharactersFeature,
  (state: CharacterState) => state.characters//TODO : HIJO
);

export const selectLoading = createSelector(
  selectCharactersFeature,
  (state: CharacterState) => state.loading //TODO : HIJO
);