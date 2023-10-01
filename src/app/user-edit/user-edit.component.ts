import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDto } from '../api/models';
import { UserService } from '../api/services';

export interface DialogData {
  item: UserDto,
  action: string
};

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  form: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<UserEditComponent>,
    private formBuilder: FormBuilder,
    private service: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      patronymic: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    if (this.data.action == 'edit') {
      console.log(this.data.item);
      this.form.patchValue({
        firstName: this.data.item.firstName,
        lastName: this.data.item.lastName,
        patronymic: this.data.item.patronymic,
        email: this.data.item.email,
        phoneNumber: this.data.item.phoneNumber,
        password: this.data.item.password,
      })
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  async onSave(): Promise<void> {
    if (this.data.action == 'edit') {
      this.data.item.firstName = this.f['firstName'].value;
      this.data.item.lastName = this.f['lastName'].value;
      this.data.item.patronymic = this.f['patronymic'].value;
      this.data.item.email = this.f['email'].value;
      this.data.item.phoneNumber = this.f['phoneNumber'].value;
      this.data.item.password = this.f['password'].value;
      let param = {
        id: this.data.item.id == undefined ? 0 : this.data.item.id,
        body: this.data.item
      };
      this.service.updateUser(param).subscribe(result => {
        this.dialogRef.close();
      });
    } else {
      this.data.item = {
        "id": undefined,
        "firstName": this.f['firstName'].value,
        "lastName": this.f['lastName'].value,
        "patronymic": this.f['patronymic'].value,
        "email": this.f['email'].value,
        "phoneNumber": this.f['phoneNumber'].value,
        "password": this.f['password'].value,
      };
      let param = {
        body: this.data.item
      };
      this.service.postUser(param).subscribe(result => {
        this.dialogRef.close(result);
      });
    }
  }

  get f() {
    return this.form.controls;
  }
}
