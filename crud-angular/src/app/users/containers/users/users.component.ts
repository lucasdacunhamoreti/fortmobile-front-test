import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../model/user';
import { UsersService } from '../../services/users.service';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> | null = null;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,

    ) {
    this.refresh();
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

  onRemove(user: User) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Do you really want to delete this user?',
    });

    dialogRef.afterClosed().subscribe((result: boolean)  => {
      if(result) {
        this.usersService.remove(user.id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('User deleted!', '', {
              duration: 4000, verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Error on remove user!')
        );
      }
    });

  }

  refresh() {
    this.users$ = this.usersService.list().pipe(
      catchError(error => {
        this.onError('Error on loading users.');
        return of([]);
      })
    );
  }

  ngOnInit() {
  }

}
