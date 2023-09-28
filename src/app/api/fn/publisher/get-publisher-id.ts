/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublisherDto } from '../../models/publisher-dto';

export interface GetPublisherId$Params {

/**
 * Id of record to operate
 */
  id: number;
}

export function getPublisherId(http: HttpClient, rootUrl: string, params: GetPublisherId$Params, context?: HttpContext): Observable<StrictHttpResponse<PublisherDto>> {
  const rb = new RequestBuilder(rootUrl, getPublisherId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getPublisherId.PATH = '/publisher/{id}';
