import { Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {LoginComponent} from "./login/login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

export const routes: Routes = [
  { path: '', component: UserListComponent, pathMatch:'full' },
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
];
