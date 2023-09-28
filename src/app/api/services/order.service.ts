/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteOrderById } from '../fn/order/delete-order-by-id';
import { DeleteOrderById$Params } from '../fn/order/delete-order-by-id';
import { getOrderId } from '../fn/order/get-order-id';
import { GetOrderId$Params } from '../fn/order/get-order-id';
import { getOrderList } from '../fn/order/get-order-list';
import { GetOrderList$Params } from '../fn/order/get-order-list';
import { OrderDto } from '../models/order-dto';
import { PageDto } from '../models/page-dto';
import { postOrder } from '../fn/order/post-order';
import { PostOrder$Params } from '../fn/order/post-order';
import { updateOrder } from '../fn/order/update-order';
import { UpdateOrder$Params } from '../fn/order/update-order';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getOrderList()` */
  static readonly GetOrderListPath = '/order/list';

  /**
   * List all Orders
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderList$Response(params?: GetOrderList$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<OrderDto>;
}>> {
    return getOrderList(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Orders
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrderList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderList(params?: GetOrderList$Params, context?: HttpContext): Observable<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<OrderDto>;
}> {
    return this.getOrderList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<OrderDto>;
}>): PageDto & {

/**
 * List of records to show
 */
'records'?: Array<OrderDto>;
} => r.body)
    );
  }

  /** Path part for operation `postOrder()` */
  static readonly PostOrderPath = '/order';

  /**
   * Create a order
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postOrder$Response(params: PostOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderDto>> {
    return postOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a order
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postOrder(params: PostOrder$Params, context?: HttpContext): Observable<OrderDto> {
    return this.postOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderDto>): OrderDto => r.body)
    );
  }

  /** Path part for operation `getOrderId()` */
  static readonly GetOrderIdPath = '/order/{id}';

  /**
   * get Order by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderId$Response(params: GetOrderId$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderDto>> {
    return getOrderId(this.http, this.rootUrl, params, context);
  }

  /**
   * get Order by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrderId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderId(params: GetOrderId$Params, context?: HttpContext): Observable<OrderDto> {
    return this.getOrderId$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderDto>): OrderDto => r.body)
    );
  }

  /** Path part for operation `updateOrder()` */
  static readonly UpdateOrderPath = '/order/{id}';

  /**
   * update Order by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder$Response(params: UpdateOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderDto>> {
    return updateOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * update Order by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder(params: UpdateOrder$Params, context?: HttpContext): Observable<OrderDto> {
    return this.updateOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderDto>): OrderDto => r.body)
    );
  }

  /** Path part for operation `deleteOrderById()` */
  static readonly DeleteOrderByIdPath = '/order/{id}';

  /**
   * delete Order by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrderById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrderById$Response(params: DeleteOrderById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOrderById(this.http, this.rootUrl, params, context);
  }

  /**
   * delete Order by id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOrderById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrderById(params: DeleteOrderById$Params, context?: HttpContext): Observable<void> {
    return this.deleteOrderById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
