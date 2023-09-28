/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BookDto } from '../models/book-dto';
import { deleteBookById } from '../fn/book/delete-book-by-id';
import { DeleteBookById$Params } from '../fn/book/delete-book-by-id';
import { getBookId } from '../fn/book/get-book-id';
import { GetBookId$Params } from '../fn/book/get-book-id';
import { getBookList } from '../fn/book/get-book-list';
import { GetBookList$Params } from '../fn/book/get-book-list';
import { PageDto } from '../models/page-dto';
import { postBook } from '../fn/book/post-book';
import { PostBook$Params } from '../fn/book/post-book';
import { updateBook } from '../fn/book/update-book';
import { UpdateBook$Params } from '../fn/book/update-book';

@Injectable({ providedIn: 'root' })
export class BookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getBookList()` */
  static readonly GetBookListPath = '/book/list';

  /**
   * List all Books
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBookList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookList$Response(params?: GetBookList$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<BookDto>;
}>> {
    return getBookList(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Books
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBookList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookList(params?: GetBookList$Params, context?: HttpContext): Observable<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<BookDto>;
}> {
    return this.getBookList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<BookDto>;
}>): PageDto & {

/**
 * List of records to show
 */
'records'?: Array<BookDto>;
} => r.body)
    );
  }

  /** Path part for operation `postBook()` */
  static readonly PostBookPath = '/book';

  /**
   * Create a book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postBook$Response(params: PostBook$Params, context?: HttpContext): Observable<StrictHttpResponse<BookDto>> {
    return postBook(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postBook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postBook(params: PostBook$Params, context?: HttpContext): Observable<BookDto> {
    return this.postBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookDto>): BookDto => r.body)
    );
  }

  /** Path part for operation `getBookId()` */
  static readonly GetBookIdPath = '/book/{id}';

  /**
   * get Book by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBookId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookId$Response(params: GetBookId$Params, context?: HttpContext): Observable<StrictHttpResponse<BookDto>> {
    return getBookId(this.http, this.rootUrl, params, context);
  }

  /**
   * get Book by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBookId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookId(params: GetBookId$Params, context?: HttpContext): Observable<BookDto> {
    return this.getBookId$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookDto>): BookDto => r.body)
    );
  }

  /** Path part for operation `updateBook()` */
  static readonly UpdateBookPath = '/book/{id}';

  /**
   * update Book by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBook$Response(params: UpdateBook$Params, context?: HttpContext): Observable<StrictHttpResponse<BookDto>> {
    return updateBook(this.http, this.rootUrl, params, context);
  }

  /**
   * update Book by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateBook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBook(params: UpdateBook$Params, context?: HttpContext): Observable<BookDto> {
    return this.updateBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookDto>): BookDto => r.body)
    );
  }

  /** Path part for operation `deleteBookById()` */
  static readonly DeleteBookByIdPath = '/book/{id}';

  /**
   * delete Book by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBookById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBookById$Response(params: DeleteBookById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteBookById(this.http, this.rootUrl, params, context);
  }

  /**
   * delete Book by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBookById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBookById(params: DeleteBookById$Params, context?: HttpContext): Observable<void> {
    return this.deleteBookById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
