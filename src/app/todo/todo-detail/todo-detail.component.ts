import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../todo.type";
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../todo.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit{

  id: string | null = null;
  task$!: Observable<Todo | null>;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.task$ = this.todoService.getId(this.id);
  }
}
