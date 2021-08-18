import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ToDo} from '../shared/models/to-do.model';
import {ToDosStateService} from '../shared/services/to-dos-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allToDos$: Observable<ToDo[]> = this.todosState.allItems$;
  incompleteItems$: Observable<ToDo[]> = this.todosState.incompleteItems$;
  completedItems$: Observable<ToDo[]> = this.todosState.completeItems$;

  constructor(private store: Store<any>,
              private todosState: ToDosStateService) { }

  ngOnInit(): void {
    this.allToDos$.subscribe(x => console.log(x));
  }

}
