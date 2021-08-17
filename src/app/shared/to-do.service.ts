import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ToDo} from './models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  testCall() {
    return this.http.get('/api');
  }

  getAllTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('/api');
  }

  getSingleToDo() {

  }

  createToDo() {

  }

  updateToDo(id: any) {

  }

  deleteToDo(id: any) {

  }

}
