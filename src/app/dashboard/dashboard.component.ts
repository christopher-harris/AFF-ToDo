import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../shared/to-do.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ToDo} from '../shared/models/to-do.model';
import {selectAll} from '../store/todos/selectors/to-do.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allToDos$: Observable<ToDo[]> = this.store.pipe(selectAll);
  // allTodos$: Observable<any> = this.toDoService.getAllTodos();
  // allTodos$: Observable<any> = this.toDoService.entities$;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    // this.allTodos$.subscribe(x => console.log(x));
  }

}
