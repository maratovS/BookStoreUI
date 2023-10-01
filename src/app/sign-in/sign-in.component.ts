import { Component, Inject } from '@angular/core';
import { SignInDto, UserDto } from '../api/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../api/services';
import { UserEditComponent } from '../user-edit/user-edit.component';

export interface DialogData {
  item: SignInDto,
  action: string
};

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserEditComponent>,
    private formBuilder: FormBuilder,
    private service: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    if (this.data.action == 'edit') {
      console.log(this.data.item);
      this.form.patchValue({
        email: this.data.item.email,
        password: this.data.item.password,
      })
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  async onSave(): Promise<void> {
    console.log(this.f['email'].value);
    let signInDto: SignInDto = {
      email: this.f['email'].value,
      password: this.f['password'].value
    }
    // this.data.item.email = this.f['email'].value;
    // this.data.item.password = this.f['password'].value;
    let param = {
      body: signInDto
    };
    this.service.signInUser(param).subscribe(result => {
      this.dialogRef.close(result);
    });

  }

  get f() {
    return this.form.controls;
  }
}
