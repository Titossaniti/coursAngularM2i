import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import type {User} from "../user.type";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{

  user!: User;
  itemId: string | null = null;
  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.http.get<User>(`${this.apiUrl}/${this.itemId}`).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
