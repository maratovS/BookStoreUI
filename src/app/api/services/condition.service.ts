/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ConditionDto } from '../models/condition-dto';
import { deleteConditionById } from '../fn/condition/delete-condition-by-id';
import { DeleteConditionById$Params } from '../fn/condition/delete-condition-by-id';
import { getConditionId } from '../fn/condition/get-condition-id';
import { GetConditionId$Params } from '../fn/condition/get-condition-id';
import { getConditionList } from '../fn/condition/get-condition-list';
import { GetConditionList$Params } from '../fn/condition/get-condition-list';
import { PageDto } from '../models/page-dto';
import { postCondition } from '../fn/condition/post-condition';
import { PostCondition$Params } from '../fn/condition/post-condition';
import { updateCondition } from '../fn/condition/update-condition';
import { UpdateCondition$Params } from '../fn/condition/update-condition';

@Injectable({ providedIn: 'root' })
export class ConditionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getConditionList()` */
  static readonly GetConditionListPath = '/condition/list';

  /**
   * List all Conditions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getConditionList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConditionList$Response(params?: GetConditionList$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<ConditionDto>;
}>> {
    return getConditionList(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Conditions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getConditionList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConditionList(params?: GetConditionList$Params, context?: HttpContext): Observable<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<ConditionDto>;
}> {
    return this.getConditionList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<ConditionDto>;
}>): PageDto & {

/**
 * List of records to show
 */
'records'?: Array<ConditionDto>;
} => r.body)
    );
  }

  /** Path part for operation `postCondition()` */
  static readonly PostConditionPath = '/condition';

  /**
   * Create a condition
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCondition()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCondition$Response(params: PostCondition$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
    return postCondition(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a condition
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCondition$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCondition(params: PostCondition$Params, context?: HttpContext): Observable<ConditionDto> {
    return this.postCondition$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConditionDto>): ConditionDto => r.body)
    );
  }

  /** Path part for operation `getConditionId()` */
  static readonly GetConditionIdPath = '/condition/{id}';

  /**
   * get Condition by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getConditionId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConditionId$Response(params: GetConditionId$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
    return getConditionId(this.http, this.rootUrl, params, context);
  }

  /**
   * get Condition by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getConditionId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConditionId(params: GetConditionId$Params, context?: HttpContext): Observable<ConditionDto> {
    return this.getConditionId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConditionDto>): ConditionDto => r.body)
    );
  }

  /** Path part for operation `updateCondition()` */
  static readonly UpdateConditionPath = '/condition/{id}';

  /**
   * update Condition by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCondition()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCondition$Response(params: UpdateCondition$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
    return updateCondition(this.http, this.rootUrl, params, context);
  }

  /**
   * update Condition by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCondition$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCondition(params: UpdateCondition$Params, context?: HttpContext): Observable<ConditionDto> {
    return this.updateCondition$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConditionDto>): ConditionDto => r.body)
    );
  }

  /** Path part for operation `deleteConditionById()` */
  static readonly DeleteConditionByIdPath = '/condition/{id}';

  /**
   * delete Condition by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteConditionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteConditionById$Response(params: DeleteConditionById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteConditionById(this.http, this.rootUrl, params, context);
  }

  /**
   * delete Condition by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteConditionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteConditionById(params: DeleteConditionById$Params, context?: HttpContext): Observable<void> {
    return this.deleteConditionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
