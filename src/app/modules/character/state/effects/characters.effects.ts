import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CHARACTERS } from '../../constants';
import { CharacterService } from '../../services/character.service';
 
@Injectable()
export class CharactersEffects {
 constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(CHARACTERS.LOAD_CHARACTERS),
    mergeMap(() => this.characterService.getCharacter() // TODO Retorna la data[.....]
      .pipe(
        map(characters => ({ type: CHARACTERS.LOADED_CHARACTERS, characters: characters.results })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  
}