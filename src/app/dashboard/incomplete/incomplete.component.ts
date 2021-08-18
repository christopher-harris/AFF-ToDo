import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../../shared/models/to-do.model';
import {ToDosStateService} from '../../shared/services/to-dos-state.service';
import {ToDoService} from '../../shared/to-do.service';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.scss']
})
export class IncompleteComponent implements OnInit {
  unfinished$: Observable<ToDo[]> = this.store.incompleteItems$;

  constructor(private store: ToDosStateService,
              private toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  completeTodo(item: ToDo) {
    console.log(item);
  }

}
