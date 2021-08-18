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

  getSingleToDo(id: string): Observable<ToDo> {
    return this.http.get<ToDo>(`/api/${id}`);
  }

  createToDo(newItem: any) {
    return this.http.post('/api/', newItem);
  }

  updateToDo(updatedItem: any): Observable<any> {
    return this.http.put<ToDo>('/api/', updatedItem);
  }

  deleteToDo(id: any) {
    return this.http.delete(`/api/${id}`);
  }

}
