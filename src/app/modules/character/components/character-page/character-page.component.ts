import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCharacters } from '../../state/actions/characters.actions';
import { selectLoading } from '../../state/selectors';


@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {
  loading$ : Observable<boolean> = new Observable();
  constructor(private store: Store<any>) { }
  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadCharacters());// primer disparador de una accion
  }
}
