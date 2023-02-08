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
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name', 'cpf', 'phoneNumber', 'email', 'actions' ];

  constructor() { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(user: User) {
    this.edit.emit(user);
  }

  onDelete(user: User) {
    this.remove.emit(user);
  }

  ngOnInit() {
  }

}
