import {Component, OnDestroy, OnInit} from '@angular/core';

import type {User} from "../user.type";
import {Observable} from "rxjs";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  searchText: string = "";
  // filteredUsers : User[] = [];
  users$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.users$ = this.userService.getList();
  }

  onSearchChange(searchText:string){
    this.searchText = searchText;
  }

  // deleteUser(id:number){
  //   this.users = this.users.filter(user => user.id !== id);
  //   // this.filteredUsers = this.filteredUsers.filter(user => user.id !== id);
  // }

  // onSearchChange(searchText:string){
  //   console.log("USER_LIST : ",searchText);
  //   this.searchText=searchText;
  // }

  // Se désinscrire de l'observable
  // ngOnDestroy():void{
  //   this.subscription.unsubscribe();
  // }


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

  // condition:string="B";
}
