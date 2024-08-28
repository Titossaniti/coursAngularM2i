import {Component, OnInit} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {CommonModule, NgForOf} from "@angular/common";
import {ButtonDeleteComponent} from "../button-delete/button-delete.component";
import type {User} from "../user.type";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SearchComponent, UserDetailComponent, NgForOf, ButtonDeleteComponent, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  apiUrl = "https://jsonplaceholder.typicode.com/users";
  searchText: string = "";
  users  :User[] = [];
  filteredUsers : User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.users = this.filteredUsers = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  deleteUser(id:number){
    this.users = this.users.filter(user => user.id !== id);
    this.filteredUsers = this.filteredUsers.filter(user => user.id !== id);

  }

  // onSearchChange(searchText:string){
  //   console.log("USER_LIST : ",searchText);
  //   this.searchText=searchText;
  // }

  onSearchChange(searchText:string){
    this.searchText = searchText;
    this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()));
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
