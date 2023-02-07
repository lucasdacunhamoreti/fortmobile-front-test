import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  list(): User[] {
    return [{ _id: '1' ,name: 'Lucas', cpf: 11652685976, phoneNumber: 43996775847, email: 'lucasdacuna@email.com' }];

  }
}
