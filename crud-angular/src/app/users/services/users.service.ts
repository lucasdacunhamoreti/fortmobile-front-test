import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API = 'http://localhost:3001/users';

  constructor(private httpClient: HttpClient) { }

  loadById(id: number) {
    return this.httpClient.get<User>(`${this.API}/${id}`);
  }

  list() {
    return this.httpClient.get<User[]>(this.API);
  }

  save(data: User) {
    if (data.id) {
      return this.update(data);
    }
    return this.create(data);
  }

  private create(data: User) {
    return this.httpClient.post<User>(this.API, data);
  }

  private update(data: User) {
    return this.httpClient.put<User>(`${this.API}/${data.id}`, data);
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
