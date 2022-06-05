import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  constructor(private httpClient: HttpClient) { }

  getEpisode(): Observable<any> {
    return this.httpClient.get<any>('https://rickandmortyapi.com/api/episode'
    );
  }
}
