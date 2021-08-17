import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../../shared/models/to-do.model';
import {select, Store} from '@ngrx/store';
import {selectUncompletedToDos} from '../../store/todos/selectors/to-do.selectors';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.scss']
})
export class IncompleteComponent implements OnInit {
  unfinished$: Observable<ToDo[]> = this.store.pipe(select(selectUncompletedToDos));

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  completeTodo(item: ToDo) {
    console.log(item);
  }

}
