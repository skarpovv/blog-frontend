import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../services/auth";

@Pipe({
  name: 'userFilter'
})
export class FilterUsersPipe implements PipeTransform {
  transform(users: User[], searchQuery: string): User[] {
    if (!searchQuery) {
      return users;
    }

    searchQuery = searchQuery.toLowerCase();
    return users.filter(user =>
      user.fullName && user.fullName.toLowerCase().includes(searchQuery) ||
      user.username && user.username.toLowerCase().includes(searchQuery)
    );
  }
}
