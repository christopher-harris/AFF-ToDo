import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../../shared/models/to-do.model';
import {select, Store} from '@ngrx/store';
import {selectCompletedToDos} from '../../store/todos/selectors/to-do.selectors';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  completed$: Observable<ToDo[]> = this.store.pipe(select(selectCompletedToDos));

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  removeCompletedItem(item: ToDo) {
    console.log(item);
  }

}
