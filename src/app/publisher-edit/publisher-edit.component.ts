import { Component, Inject, OnInit } from '@angular/core';
import { PublisherDto } from '../api/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PublisherService } from '../api/services';


export interface DialogData {
  item: PublisherDto,
  action: string
};

@Component({
  selector: 'app-publisher-edit',
  templateUrl: './publisher-edit.component.html',
  styleUrls: ['./publisher-edit.component.scss']
})
export class PublisherEditComponent implements OnInit {


  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<PublisherEditComponent>,
    private formBuilder: FormBuilder,
    private service: PublisherService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = this.formBuilder.group({
      parentArticleTypeId: ['', null],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      isComplex: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data.action == 'edit') {
      console.log(this.data.item);
      this.form.patchValue({
        name: this.data.item.name,
      })
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  async onSave(): Promise<void> {
    if (this.data.action == 'edit') {
      this.data.item.name = this.f['name'].value;
      let param = {
        id: this.data.item.id == undefined ? 0 : this.data.item.id,
        body: this.data.item
      };
      this.service.updatePublisher(param).subscribe(result => {
        this.dialogRef.close();
      });
    } else {
      this.data.item = {
        "id": undefined,
        "name": this.f['name'].value,
      };
      let param = {
        body: this.data.item
      };
      this.service.postPublisher(param).subscribe(result => {
        this.dialogRef.close();
      });
    }
  }

  get f() {
    return this.form.controls;
  }

}
