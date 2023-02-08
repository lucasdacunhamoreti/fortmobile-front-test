import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../model/user';
import { UsersService } from '../../services/users.service';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,

    ) {
    this.users$ = this.usersService.list().pipe(
      catchError(error => {
        this.onError('Error on loading users.');
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(user: User) {
    this.router.navigate(['edit', user.id], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
