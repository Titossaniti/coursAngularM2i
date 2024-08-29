import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {RouterModule} from "@angular/router";
import {TodoService} from "./todo.service";




@NgModule({
  declarations: [TodoListComponent,
  TodoDetailComponent,],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [TodoService]
})
export class TodoModule { }
