import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [
    { _id: '1' ,name: 'Lucas', cpf: 11652685976, phoneNumber: 43996775847, email: 'lucasdacuna@email.com' }
  ];
  displayedColumns = ['name', 'cpf', 'phoneNumber', 'email' ];

  // usersService: UsersService;

  constructor(private usersService: UsersService ) {
    // this.usersService = new UsersService();
    this.users = this.usersService.list();
  }

  ngOnInit() {
  }

}
