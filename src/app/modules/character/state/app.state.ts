import { ActionReducerMap } from '@ngrx/store';
import { CharacterState } from "../models";
import { charactersReducer } from './reducers/characters.reducers';


export interface AppState {
  characters: CharacterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characters: charactersReducer,
};