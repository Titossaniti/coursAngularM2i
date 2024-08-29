import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {ButtonDeleteComponent} from "./button-delete/button-delete.component";
import {RouterModule} from "@angular/router";
import {SearchComponent} from "../search/search.component";
import {FilterPipe} from "./filter.pipe";
import {UserService} from "./user.service";



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserProfileComponent,
    ButtonDeleteComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchComponent,
  ],
  providers: [UserService]
})
export class UserModule { }
