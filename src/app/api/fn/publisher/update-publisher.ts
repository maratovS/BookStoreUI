/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublisherDto } from '../../models/publisher-dto';

export interface UpdatePublisher$Params {

/**
 * Id of record to operate
 */
  id: number;
  
    /**
     * Body for updating Publisher
     */
    body: PublisherDto
}

export function updatePublisher(http: HttpClient, rootUrl: string, params: UpdatePublisher$Params, context?: HttpContext): Observable<StrictHttpResponse<PublisherDto>> {
  const rb = new RequestBuilder(rootUrl, updatePublisher.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PublisherDto>;
    })
  );
}

updatePublisher.PATH = '/publisher/{id}';
