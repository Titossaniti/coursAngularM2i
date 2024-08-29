import { Pipe, type PipeTransform } from "@angular/core";
import {User} from "./user.type";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(users: User[] | null , searchText: string): User[] {
    if (!users) return [];
    return users.filter(
      (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) || user.email.includes(searchText),
    );
  }
}
