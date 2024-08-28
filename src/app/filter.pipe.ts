import { Pipe, type PipeTransform } from "@angular/core";
import {User} from "./user.type";

@Pipe({
  name: "filter",
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], searchText: string): User[] {
    if (!users || !searchText) {
      return users;
    }
    return users.filter(
      (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) || user.email.includes(searchText),
    );
  }
}
