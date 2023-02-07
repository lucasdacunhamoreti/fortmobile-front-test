import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'cpf', 'phoneNumber', 'email', 'actions' ];

  constructor() { }

  onAdd() {
    this.add.emit(true);
  }

  ngOnInit() {
  }

}
