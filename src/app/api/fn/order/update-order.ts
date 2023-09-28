/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderDto } from '../../models/order-dto';

export interface UpdateOrder$Params {

/**
 * Id of record to operate
 */
  id: number;
  
    /**
     * Body for updating Order
     */
    body: OrderDto
}

export function updateOrder(http: HttpClient, rootUrl: string, params: UpdateOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderDto>> {
  const rb = new RequestBuilder(rootUrl, updateOrder.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updateOrder.PATH = '/order/{id}';
