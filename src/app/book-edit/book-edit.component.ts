import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthorDto, BookDto, CategoryDto, ConditionDto, PublisherDto } from '../api/models';
import { AuthorService, BookService, CategoryService, ConditionService, PublisherService } from '../api/services';
import { lastValueFrom } from 'rxjs';

export interface DialogData {
  item: BookDto,
  action: string
};

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent {
  form: FormGroup;
  authors: AuthorDto[] | undefined = [];
  categories: CategoryDto[] | undefined = [];
  conditions: ConditionDto[] | undefined = [];
  publishers: PublisherDto[] | undefined = [];
  constructor(public dialogRef: MatDialogRef<BookEditComponent>,
    private formBuilder: FormBuilder,
    private service: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private conditionService: ConditionService,
    private publisherService: PublisherService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      publicationYear: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.maxLength(50)]],
      poster: ['', [Validators.required, Validators.maxLength(50)]],
      author: ['', null],
      publisher: ['', null],
      condition: ['', null],
      category: ['', null]
    });
    this.authorService.getAuthorList().subscribe(items => {
      const size = items.totalRows;
      if (size != 0) {
        this.authorService.getAuthorList({ pageSize: size }).subscribe(loc => {
          this.authors = loc.records;
        });
      }
    });
    this.categoryService.getCategoryList().subscribe(items => {
      const size = items.totalRows;
      if (size != 0) {
        this.categoryService.getCategoryList({ pageSize: size }).subscribe(loc => {
          this.categories = loc.records;
        });
      }
    });

    this.conditionService.getConditionList().subscribe(items => {
      const size = items.totalRows;
      if (size != 0) {
        this.conditionService.getConditionList({ pageSize: size }).subscribe(loc => {
          this.conditions = loc.records;
        });
      }
    });
    this.publisherService.getPublisherList().subscribe(items => {
      const size = items.totalRows;
      if (size != 0) {
        this.publisherService.getPublisherList({ pageSize: size }).subscribe(loc => {
          this.publishers = loc.records;
        });
      }
    });
  }

  ngOnInit(): void {
    if (this.data.action == 'edit') {
      console.log(this.data.item);
      this.form.patchValue({
        title: this.data.item.title,
        description: this.data.item.description,
        publicationYear: this.data.item.publicationYear,
        price: this.data.item.price,
        poster: this.data.item.poster,
        author: this.data.item.author?.id,
        publisher: this.data.item.publisher?.id,
        condition: this.data.item.condition?.id,
        category: this.data.item.category?.id
      })
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  async onSave(): Promise<void> {
    let author!: AuthorDto;
    let publisher!: PublisherDto;
    let condition!: ConditionDto;
    let category!: CategoryDto;
    if (this.f['author'].value != "" && this.f['author'].value != undefined) {
      let param = {
        id: this.f['author'].value
      };
      author = await lastValueFrom(this.authorService.getAuthorId(param));
    }
    if (this.f['publisher'].value != "" && this.f['publisher'].value != undefined) {
      let param = {
        id: this.f['publisher'].value
      };
      publisher = await lastValueFrom(this.publisherService.getPublisherId(param));
    }
    if (this.f['condition'].value != "" && this.f['condition'].value != undefined) {
      let param = {
        id: this.f['condition'].value
      };
      condition = await lastValueFrom(this.conditionService.getConditionId(param));
    }
    if (this.f['category'].value != "" && this.f['category'].value != undefined) {
      let param = {
        id: this.f['category'].value
      };
      category = await lastValueFrom(this.categoryService.getCategoryId(param));
    }

    if (this.data.action == 'edit') {
      this.data.item.author = author;
      this.data.item.category = category;
      this.data.item.condition = condition;
      this.data.item.publisher = publisher;
      this.data.item.title = this.f['title'].value;
      this.data.item.description = this.f['description'].value;
      this.data.item.price = this.f['price'].value;
      this.data.item.poster = this.f['poster'].value;
      this.data.item.publicationYear = this.f['publicationYear'].value;
      let param = {
        id: this.data.item.id == undefined ? 0 : this.data.item.id,
        body: this.data.item
      };
      this.service.updateBook(param).subscribe(result => {
        this.dialogRef.close();
      });
    } else {
      this.data.item = {
        "id": undefined,
        "title": this.f['title'].value,
        "description": this.f['description'].value,
        "publicationYear": this.f['publicationYear'].value,
        "price": this.f['price'].value,
        "poster": this.f['poster'].value,
        "author": author,
        "publisher": publisher,
        "condition": condition,
        "category": category
      };
      let param = {
        body: this.data.item
      };
      this.service.postBook(param).subscribe(result => {
        this.dialogRef.close();
      });
    }
  }

  get f() {
    return this.form.controls;
  }
}
