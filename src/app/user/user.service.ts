import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {
    "id": "123",
    "name": "123"
  }

  constructor() { }

  getUsers() {
    return of(this.user);
  }
}
