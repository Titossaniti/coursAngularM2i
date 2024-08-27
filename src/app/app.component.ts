import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management';
}
