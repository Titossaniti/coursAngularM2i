import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Todo} from "./todo.type";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl: string = "https://jsonplaceholder.typicode.com/todos"
  constructor(private http: HttpClient) { }

  getList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}`)
  }
  getId(id: string | null): Observable<Todo | null>{
    if (!id) return of(null)
    return this.http.get<Todo>(`${this.apiUrl}/${id}`)
  }
  add(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/${task.id}`, task)
  }
  update(id: string, task: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, task)
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
