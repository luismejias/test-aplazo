import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '../../models';
import { loadCharacters, loadedCharacters } from '../actions/characters.actions';


// TODO Estado inicial
export const initialState: CharacterState = { loading: false,  characters: [] }

// TODO: Reducer
export const charactersReducer = createReducer(
  initialState,
  on(loadCharacters, ( state ) => { 
    //TODO: retornamos un nuevo estado con el loading en true
    return { ...state, loading: true };
  }),
  on(loadedCharacters, ( state, { characters } ) => { 
    //TODO: retornamos un nuevo estado con el loading en true
    return { ...state, loading: false, characters };
  })
);