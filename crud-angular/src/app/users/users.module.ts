import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './containers/users/users.component';
import { MatIconModule } from '@angular/material/icon';
import { UserFormComponent } from './containers/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersComponent, UserFormComponent, UsersListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
