import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "./user.type";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = "https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }

  getList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`)
  }
  getId(id: string | null): Observable<User | null>{
    if (!id) return of(null)
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }
  add(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/${user.id}`, user)
  }
  update(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user)
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
