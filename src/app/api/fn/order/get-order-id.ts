/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderDto } from '../../models/order-dto';

export interface GetOrderId$Params {

/**
 * Id of record to operate
 */
  id: number;
}

export function getOrderId(http: HttpClient, rootUrl: string, params: GetOrderId$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderDto>> {
  const rb = new RequestBuilder(rootUrl, getOrderId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrderDto>;
    })
  );
}

getOrderId.PATH = '/order/{id}';
