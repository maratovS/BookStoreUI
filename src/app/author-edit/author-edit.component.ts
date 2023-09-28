import { Component, Inject } from '@angular/core';
import { AuthorDto } from '../api/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../api/services';

export interface DialogData {
  item: AuthorDto,
  action: string
};

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent {

  form: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<AuthorEditComponent>,
    private formBuilder: FormBuilder,
    private service: AuthorService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      secondName: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    if (this.data.action == 'edit') {
      console.log(this.data.item);
      this.form.patchValue({
        firstName: this.data.item.firstName,
        secondName: this.data.item.secondName,
      })
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  async onSave(): Promise<void> {
    if (this.data.action == 'edit') {
      this.data.item.firstName = this.f['firstName'].value;
      this.data.item.secondName = this.f['secondName'].value;
      let param = {
        id: this.data.item.id == undefined ? 0 : this.data.item.id,
        body: this.data.item
      };
      this.service.updateAuthor(param).subscribe(result => {
        this.dialogRef.close();
      });
    } else {
      this.data.item = {
        "id": undefined,
        "firstName": this.f['firstName'].value,
        "secondName": this.f['secondName'].value,
      };
      let param = {
        body: this.data.item
      };
      this.service.postAuthor(param).subscribe(result => {
        this.dialogRef.close();
      });
    }
  }

  get f() {
    return this.form.controls;
  }
}
