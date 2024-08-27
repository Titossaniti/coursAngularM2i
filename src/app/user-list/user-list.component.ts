import {Component, OnInit} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {NgForOf} from "@angular/common";
import {ButtonDeleteComponent} from "../button-delete/button-delete.component";
import type {User} from "../user.type";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SearchComponent, UserDetailComponent, NgForOf, ButtonDeleteComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  searchText: string = "";

  users  :User[] = [];

  deleteUser(id:number){
    this.users = this.users.filter(user => user.id !== id);
  }

  onSearchChange(searchText:string){
    console.log("USER LIST : ",searchText);
    this.searchText=searchText;
  }

  async ngOnInit(): Promise<void> {
    try {
      const url = "https://jsonplaceholder.typicode.com/users"
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      this.users = await response.json();

    } catch (error) {
      console.log(error);
    }

  }

  condition:string="B";
}
