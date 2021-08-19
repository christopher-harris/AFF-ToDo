import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface UsersResponse {
    info: any;
    results: any[];
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getSomeUsers(userIds: number[]): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}?results=${userIds.length}&nat=us`).pipe(
          map((response: UsersResponse) => {
              return response.results.map((user, index) => {
                 return {
                     ...user,
                     userId: userIds[index]
                 }
              });
          })
      );
  }

}
