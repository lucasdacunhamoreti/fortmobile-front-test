import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { User } from '../model/user';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private service: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: '', name: '', cpf: '', phoneNumber: '', email: '' });
  }
}
