import { Component } from '@angular/core';
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users  :{id:number, name:string,username:string ,email:string}[]  = [
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
  ];

  condition:string="B";



}
