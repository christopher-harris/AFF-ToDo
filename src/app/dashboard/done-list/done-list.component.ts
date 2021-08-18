import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../../shared/models/to-do.model';
import {select, Store} from '@ngrx/store';
import {selectCompletedToDos} from '../../store/todos/selectors/to-do.selectors';
import {UpdateItem} from '../../store/todos';
import {ToDosStateService} from '../../shared/services/to-dos-state.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  completed$: Observable<ToDo[]> = this.store.completeItems$;

  constructor(private store: ToDosStateService) { }

  ngOnInit(): void {
  }

  removeCompletedItem(item: ToDo): void {
    const updatedItem: ToDo = {
      ...item,
      completed: false
    }
    console.log(updatedItem);
  }

}
