import { Injectable } from '@angular/core';
import {StateService} from './state.service';
import {ToDo} from '../models/to-do.model';
import {Observable, throwError} from 'rxjs';
import {ToDoService} from '../to-do.service';
import {catchError, tap} from 'rxjs/operators';

interface ToDosState {
  allItems: ToDo[];
  incomplete: ToDo[];
  complete: ToDo[];
  loading: boolean;
  loaded: boolean;
  error: any | null;
}

const initialState: ToDosState = {
  allItems: [],
  incomplete: [],
  complete: [],
  loading: false,
  loaded: false,
  error: null,
}

@Injectable({
  providedIn: 'root'
})
export class ToDosStateService extends StateService<ToDosState>{
  allItems$: Observable<ToDo[]> = this.select(state => state.allItems);
  incompleteItems$: Observable<ToDo[]> = this.select(state => state.incomplete);
  completeItems$: Observable<ToDo[]> = this.select(state => state.complete);
  loading$: Observable<boolean> = this.select(state => state.loading);
  loaded$: Observable<boolean> = this.select(state => state.loaded);
  errors$: Observable<any | null> = this.select(state => state.error);

  constructor(private toDoService: ToDoService) {
    super(initialState);
    this.loadItems();
  }

  loadItems() {
    this.setState({loading: true});
    this.toDoService.getAllTodos().subscribe((response: ToDo[]) => {
      this.setState({
        ...this.state,
        allItems: response,
        incomplete: response.filter(todo => todo.completed === false),
        complete: response.filter(todo => todo.completed === true),
        loading: false,
        loaded: false
      });
    });
  }

  deleteItem(id: number) {
    this.toDoService.deleteToDo(id).pipe(
        tap((res: any) => {
          this.setState({
            ...this.state,
            allItems: this.state.allItems.filter(item => item.id !== id),
            incomplete: this.state.incomplete.filter(item => item.id !== id),
            complete: this.state.complete.filter(item => item.id !== id)
          });
        }),
        catchError(error => throwError(error.response))
    ).subscribe();
  }

}
