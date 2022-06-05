import { Component, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Character } from '../../models';
import { selectCharactersList } from '../../state/selectors';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})
export class CharacterTableComponent implements OnInit {
  dataSource = new MatTableDataSource<Character>([]);
  @Output() handleDataEdit = new EventEmitter();
  @Output() handleDataDelete = new EventEmitter();
  displayedColumns: string[] = ['id', 'name', 'biography', 'image', 'appearance', 'house', 'edit', 'delete'];
  isLoadingResults: boolean = true;
  isRateLimitReached: boolean = false;
  resultsLength: number = 0;
  originalDataSource = new MatTableDataSource<Character>([]);
  subscription = new Subscription();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectCharactersList).subscribe((state: Character[]) => {
        this.dataSource.data = state;
        this.originalDataSource.data = state;  
      })
    );

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
