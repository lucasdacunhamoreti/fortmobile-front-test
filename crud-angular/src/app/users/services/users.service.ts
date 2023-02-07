import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API = '/assets/users.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<User[]>(this.API);
  }
}
