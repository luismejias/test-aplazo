import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  getCharacter(): Observable<CharacterResponse> {
    return this.httpClient.get<CharacterResponse>('https://rickandmortyapi.com/api/character'
    );
  }
}
