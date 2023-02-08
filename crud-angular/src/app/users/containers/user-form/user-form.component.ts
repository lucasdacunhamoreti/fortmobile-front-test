import { User } from './../../model/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsersService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]+$")]],
      phoneNumber: [null, [Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(11), Validators.maxLength(11)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('User successfully saved!', '', { duration: 4000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Error on save user!', '', { duration: 4000 });
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field.hasError('required')) {
      return 'Required field';
    }

    if (field.hasError('pattern')) {
      return 'Must only contain numbers';
    }

    if (field.hasError('minlength')) {
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Minimum size needs to be ${requiredLength} characters`;
    }

    if (field.hasError('maxlength')) {
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 100;
      return `Minimum size needs to be ${requiredLength} characters`;
    }

    if (field.hasError('email')) {
      return 'Invalid email format';
    }
  }

  ngOnInit() {
    const user: User = this.route.snapshot.data['user'];

    this.form.setValue({
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      phoneNumber: user.phoneNumber,
      email: user.email
    });
  }

}
