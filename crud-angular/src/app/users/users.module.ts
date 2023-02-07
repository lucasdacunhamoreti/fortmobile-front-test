import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class UsersModule { }
