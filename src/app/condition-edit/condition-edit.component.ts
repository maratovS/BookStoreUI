import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConditionDto } from '../api/models';
import { ConditionService } from '../api/services';

export interface DialogData {
  item: ConditionDto,
  action: string
};

@Component({
  selector: 'app-condition-edit',
  templateUrl: './condition-edit.component.html',
  styleUrls: ['./condition-edit.component.scss']
})
export class ConditionEditComponent {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ConditionEditComponent>,
    private formBuilder: FormBuilder,
    private service: ConditionService,
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
      this.service.updateCondition(param).subscribe(result => {
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
      this.service.postCondition(param).subscribe(result => {
        this.dialogRef.close();
      });
    }
  }

  get f() {
    return this.form.controls;
  }
}
