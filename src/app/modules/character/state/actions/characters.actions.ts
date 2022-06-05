import { createAction, props } from '@ngrx/store';
import { CHARACTERS } from '../../constants';
import { Character } from '../../models';

export const loadCharacters = createAction(
  CHARACTERS.LOAD_CHARACTERS // TODO type
);
 
export const loadedCharacters = createAction(
  CHARACTERS.LOADED_CHARACTERS,
  props<{ characters: Character[] }>(), // TODO type
)