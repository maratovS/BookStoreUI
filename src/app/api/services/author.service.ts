/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AuthorDto } from '../models/author-dto';
import { deleteAuthorById } from '../fn/author/delete-author-by-id';
import { DeleteAuthorById$Params } from '../fn/author/delete-author-by-id';
import { getAuthorId } from '../fn/author/get-author-id';
import { GetAuthorId$Params } from '../fn/author/get-author-id';
import { getAuthorList } from '../fn/author/get-author-list';
import { GetAuthorList$Params } from '../fn/author/get-author-list';
import { PageDto } from '../models/page-dto';
import { postAuthor } from '../fn/author/post-author';
import { PostAuthor$Params } from '../fn/author/post-author';
import { updateAuthor } from '../fn/author/update-author';
import { UpdateAuthor$Params } from '../fn/author/update-author';

@Injectable({ providedIn: 'root' })
export class AuthorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAuthorList()` */
  static readonly GetAuthorListPath = '/author/list';

  /**
   * List all Authors
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAuthorList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuthorList$Response(params?: GetAuthorList$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<AuthorDto>;
}>> {
    return getAuthorList(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Authors
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAuthorList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuthorList(params?: GetAuthorList$Params, context?: HttpContext): Observable<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<AuthorDto>;
}> {
    return this.getAuthorList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<AuthorDto>;
}>): PageDto & {

/**
 * List of records to show
 */
'records'?: Array<AuthorDto>;
} => r.body)
    );
  }

  /** Path part for operation `postAuthor()` */
  static readonly PostAuthorPath = '/author';

  /**
   * Create a author
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAuthor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postAuthor$Response(params: PostAuthor$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthorDto>> {
    return postAuthor(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a author
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postAuthor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postAuthor(params: PostAuthor$Params, context?: HttpContext): Observable<AuthorDto> {
    return this.postAuthor$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthorDto>): AuthorDto => r.body)
    );
  }

  /** Path part for operation `getAuthorId()` */
  static readonly GetAuthorIdPath = '/author/{id}';

  /**
   * get Author by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAuthorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuthorId$Response(params: GetAuthorId$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthorDto>> {
    return getAuthorId(this.http, this.rootUrl, params, context);
  }

  /**
   * get Author by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAuthorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuthorId(params: GetAuthorId$Params, context?: HttpContext): Observable<AuthorDto> {
    return this.getAuthorId$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthorDto>): AuthorDto => r.body)
    );
  }

  /** Path part for operation `updateAuthor()` */
  static readonly UpdateAuthorPath = '/author/{id}';

  /**
   * update Author by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAuthor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAuthor$Response(params: UpdateAuthor$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthorDto>> {
    return updateAuthor(this.http, this.rootUrl, params, context);
  }

  /**
   * update Author by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAuthor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAuthor(params: UpdateAuthor$Params, context?: HttpContext): Observable<AuthorDto> {
    return this.updateAuthor$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthorDto>): AuthorDto => r.body)
    );
  }

  /** Path part for operation `deleteAuthorById()` */
  static readonly DeleteAuthorByIdPath = '/author/{id}';

  /**
   * delete Author by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAuthorById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAuthorById$Response(params: DeleteAuthorById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAuthorById(this.http, this.rootUrl, params, context);
  }

  /**
   * delete Author by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAuthorById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAuthorById(params: DeleteAuthorById$Params, context?: HttpContext): Observable<void> {
    return this.deleteAuthorById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
