import {Injectable} from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  paginatorText: string = "1 Mississippi from 1";
  constructor() {
    super();  

    this.getAndInitTranslations();
  }

  getAndInitTranslations() {
  
    this.itemsPerPageLabel = 'Custom_Label:';
    this.firstPageLabel = `Первая страница`;
    this.itemsPerPageLabel = `Записей на странице:`;
    this.lastPageLabel = `Последняя страница`;
    
    this.nextPageLabel = 'Следующая страница';
    this.previousPageLabel = 'Предыдущая страница';
    this.changes.next();
  }

  override getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return 'Записи 0 из 0';
    } else {
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `Записи ${startIndex + 1} - ${endIndex} из ${length}`;
    }
  }
}