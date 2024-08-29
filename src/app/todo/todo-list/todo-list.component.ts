import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import type {Todo} from "../todo.type";
import {TodoService} from "../todo.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  tasks$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks$ = this.todoService.getList();
  }
}
