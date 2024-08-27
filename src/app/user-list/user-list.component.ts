import {Component, OnInit} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {NgForOf} from "@angular/common";
import {ButtonDeleteComponent} from "../button-delete/button-delete.component";
import type {User} from "../user.type";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SearchComponent, UserDetailComponent, NgForOf, ButtonDeleteComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  constructor(private http: HttpClient) {}
  url = "https://jsonplaceholder.typicode.com/users";

  searchText: string = "";

  users  :User[] = [];
  filteredUsers : User[] = [];

  deleteUser(id:number){
    this.users = this.users.filter(user => user.id !== id);
  }

  // onSearchChange(searchText:string){
  //   console.log("USER_LIST : ",searchText);
  //   this.searchText=searchText;
  // }

  ngOnInit():void {
    this.http.get<User[]>(this.url).subscribe(
    (data) => {
      this.users = data
    },
    (error) => {
      console.log(error)
    });
  }

  onSearchChange(searchText:string){
    this.filteredUsers = this.users.filter(user => user.name !== searchText);
  }


  // async ngOnInit(): Promise<void> {
  //   try {
  //     const response = await fetch(this.url);
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     this.users = await response.json();
  //
  //   } catch (error) {
  //     console.log(error);
  //   }
  //
  // }

  condition:string="B";
}
