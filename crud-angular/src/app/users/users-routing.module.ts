import { UsersComponent } from './containers/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './containers/user-form/user-form.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'new', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
