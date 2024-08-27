import {Component, OnInit} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SearchComponent, UserDetailComponent, NgForOf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  condition:string="B";

  users  :{id:number, name:string,username:string ,email:string}[] = [];
  searchText: string = "";

  onSearchChange(searchText:string){
    console.log("USER LIST : ",searchText);
    this.searchText=searchText;
  }

  ngOnInit(): void {
    this.users = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
      },
      {
        id: 4,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 5,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
      },
    ];
  }

}
