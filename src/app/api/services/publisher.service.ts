/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deletePublisherById } from '../fn/publisher/delete-publisher-by-id';
import { DeletePublisherById$Params } from '../fn/publisher/delete-publisher-by-id';
import { getPublisherId } from '../fn/publisher/get-publisher-id';
import { GetPublisherId$Params } from '../fn/publisher/get-publisher-id';
import { getPublisherList } from '../fn/publisher/get-publisher-list';
import { GetPublisherList$Params } from '../fn/publisher/get-publisher-list';
import { PageDto } from '../models/page-dto';
import { postPublisher } from '../fn/publisher/post-publisher';
import { PostPublisher$Params } from '../fn/publisher/post-publisher';
import { PublisherDto } from '../models/publisher-dto';
import { updatePublisher } from '../fn/publisher/update-publisher';
import { UpdatePublisher$Params } from '../fn/publisher/update-publisher';


/**
 * Everything about book story publisher
 */
@Injectable({ providedIn: 'root' })
export class PublisherService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPublisherList()` */
  static readonly GetPublisherListPath = '/publisher/list';

  /**
   * List all Publishers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPublisherList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPublisherList$Response(params?: GetPublisherList$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<PublisherDto>;
}>> {
    return getPublisherList(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Publishers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPublisherList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPublisherList(params?: GetPublisherList$Params, context?: HttpContext): Observable<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<PublisherDto>;
}> {
    return this.getPublisherList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<PublisherDto>;
}>): PageDto & {

/**
 * List of records to show
 */
'records'?: Array<PublisherDto>;
} => r.body)
    );
  }

  /** Path part for operation `postPublisher()` */
  static readonly PostPublisherPath = '/publisher';

  /**
   * Create a publisher
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postPublisher()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postPublisher$Response(params: PostPublisher$Params, context?: HttpContext): Observable<StrictHttpResponse<PublisherDto>> {
    return postPublisher(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a publisher
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postPublisher$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postPublisher(params: PostPublisher$Params, context?: HttpContext): Observable<PublisherDto> {
    return this.postPublisher$Response(params, context).pipe(
      map((r: StrictHttpResponse<PublisherDto>): PublisherDto => r.body)
    );
  }

  /** Path part for operation `getPublisherId()` */
  static readonly GetPublisherIdPath = '/publisher/{id}';

  /**
   * get Publisher by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPublisherId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPublisherId$Response(params: GetPublisherId$Params, context?: HttpContext): Observable<StrictHttpResponse<PublisherDto>> {
    return getPublisherId(this.http, this.rootUrl, params, context);
  }

  /**
   * get Publisher by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPublisherId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPublisherId(params: GetPublisherId$Params, context?: HttpContext): Observable<PublisherDto> {
    return this.getPublisherId$Response(params, context).pipe(
      map((r: StrictHttpResponse<PublisherDto>): PublisherDto => r.body)
    );
  }

  /** Path part for operation `updatePublisher()` */
  static readonly UpdatePublisherPath = '/publisher/{id}';

  /**
   * update Publisher by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePublisher()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePublisher$Response(params: UpdatePublisher$Params, context?: HttpContext): Observable<StrictHttpResponse<PublisherDto>> {
    return updatePublisher(this.http, this.rootUrl, params, context);
  }

  /**
   * update Publisher by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePublisher$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePublisher(params: UpdatePublisher$Params, context?: HttpContext): Observable<PublisherDto> {
    return this.updatePublisher$Response(params, context).pipe(
      map((r: StrictHttpResponse<PublisherDto>): PublisherDto => r.body)
    );
  }

  /** Path part for operation `deletePublisherById()` */
  static readonly DeletePublisherByIdPath = '/publisher/{id}';

  /**
   * delete Publisher by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePublisherById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePublisherById$Response(params: DeletePublisherById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePublisherById(this.http, this.rootUrl, params, context);
  }

  /**
   * delete Publisher by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePublisherById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePublisherById(params: DeletePublisherById$Params, context?: HttpContext): Observable<void> {
    return this.deletePublisherById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
