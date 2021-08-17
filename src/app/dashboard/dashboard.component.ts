import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ToDo} from '../shared/models/to-do.model';
import {
  getAllToDos,
  selectAll,
  selectCompletedToDos,
  selectUncompletedToDos
} from '../store/todos/selectors/to-do.selectors';
import {GET_ALL_TO_DOS} from '../store/todos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allToDos$: Observable<ToDo[]> = this.store.pipe(select(getAllToDos));
  unfinished$: Observable<ToDo[]> = this.store.pipe(select(selectUncompletedToDos));
  completed$: Observable<ToDo[]> = this.store.pipe(select(selectCompletedToDos));

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(GET_ALL_TO_DOS());
  }

}
