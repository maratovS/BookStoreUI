/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CategoryDto } from '../models/category-dto';
import { deleteCategoryById } from '../fn/category/delete-category-by-id';
import { DeleteCategoryById$Params } from '../fn/category/delete-category-by-id';
import { getCategoryId } from '../fn/category/get-category-id';
import { GetCategoryId$Params } from '../fn/category/get-category-id';
import { getCategoryList } from '../fn/category/get-category-list';
import { GetCategoryList$Params } from '../fn/category/get-category-list';
import { PageDto } from '../models/page-dto';
import { postCategory } from '../fn/category/post-category';
import { PostCategory$Params } from '../fn/category/post-category';
import { updateCategory } from '../fn/category/update-category';
import { UpdateCategory$Params } from '../fn/category/update-category';

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCategoryList()` */
  static readonly GetCategoryListPath = '/category/list';

  /**
   * List all Categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryList$Response(params?: GetCategoryList$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<CategoryDto>;
}>> {
    return getCategoryList(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Categories
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryList(params?: GetCategoryList$Params, context?: HttpContext): Observable<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<CategoryDto>;
}> {
    return this.getCategoryList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<CategoryDto>;
}>): PageDto & {

/**
 * List of records to show
 */
'records'?: Array<CategoryDto>;
} => r.body)
    );
  }

  /** Path part for operation `postCategory()` */
  static readonly PostCategoryPath = '/category';

  /**
   * Create a category
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCategory$Response(params: PostCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return postCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a category
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCategory(params: PostCategory$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.postCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `getCategoryId()` */
  static readonly GetCategoryIdPath = '/category/{id}';

  /**
   * get Category by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryId$Response(params: GetCategoryId$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return getCategoryId(this.http, this.rootUrl, params, context);
  }

  /**
   * get Category by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryId(params: GetCategoryId$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.getCategoryId$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `updateCategory()` */
  static readonly UpdateCategoryPath = '/category/{id}';

  /**
   * update Category by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory$Response(params: UpdateCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return updateCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * update Category by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory(params: UpdateCategory$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.updateCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `deleteCategoryById()` */
  static readonly DeleteCategoryByIdPath = '/category/{id}';

  /**
   * delete Category by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategoryById$Response(params: DeleteCategoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCategoryById(this.http, this.rootUrl, params, context);
  }

  /**
   * delete Category by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCategoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategoryById(params: DeleteCategoryById$Params, context?: HttpContext): Observable<void> {
    return this.deleteCategoryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
