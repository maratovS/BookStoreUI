/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteUserById } from '../fn/user/delete-user-by-id';
import { DeleteUserById$Params } from '../fn/user/delete-user-by-id';
import { getUserId } from '../fn/user/get-user-id';
import { GetUserId$Params } from '../fn/user/get-user-id';
import { getUserList } from '../fn/user/get-user-list';
import { GetUserList$Params } from '../fn/user/get-user-list';
import { PageDto } from '../models/page-dto';
import { postUser } from '../fn/user/post-user';
import { PostUser$Params } from '../fn/user/post-user';
import { signInUser } from '../fn/user/sign-in-user';
import { SignInUser$Params } from '../fn/user/sign-in-user';
import { updateUser } from '../fn/user/update-user';
import { UpdateUser$Params } from '../fn/user/update-user';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUserList()` */
  static readonly GetUserListPath = '/user/list';

  /**
   * List all Users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserList$Response(params?: GetUserList$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<UserDto>;
}>> {
    return getUserList(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Users
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserList(params?: GetUserList$Params, context?: HttpContext): Observable<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<UserDto>;
}> {
    return this.getUserList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<UserDto>;
}>): PageDto & {

/**
 * List of records to show
 */
'records'?: Array<UserDto>;
} => r.body)
    );
  }

  /** Path part for operation `postUser()` */
  static readonly PostUserPath = '/user';

  /**
   * Create a user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postUser$Response(params: PostUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return postUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postUser(params: PostUser$Params, context?: HttpContext): Observable<UserDto> {
    return this.postUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `signInUser()` */
  static readonly SignInUserPath = '/user/signIn';

  /**
   * Sign in a user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInUser$Response(params: SignInUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return signInUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Sign in a user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInUser(params: SignInUser$Params, context?: HttpContext): Observable<UserDto> {
    return this.signInUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `getUserId()` */
  static readonly GetUserIdPath = '/user/{id}';

  /**
   * get User by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserId$Response(params: GetUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return getUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * get User by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserId(params: GetUserId$Params, context?: HttpContext): Observable<UserDto> {
    return this.getUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/user/{id}';

  /**
   * update User by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * update User by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: UpdateUser$Params, context?: HttpContext): Observable<UserDto> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `deleteUserById()` */
  static readonly DeleteUserByIdPath = '/user/{id}';

  /**
   * delete User by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserById$Response(params: DeleteUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * delete User by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserById(params: DeleteUserById$Params, context?: HttpContext): Observable<void> {
    return this.deleteUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
