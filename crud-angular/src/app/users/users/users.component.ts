import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  displayedColumns = ['name', 'cpf', 'phoneNumber', 'email' ];

  // usersService: UsersService;

  constructor(private usersService: UsersService ) {
    // this.usersService = new UsersService();
    this.users$ = this.usersService.list();
  }

  ngOnInit() {
  }

}
