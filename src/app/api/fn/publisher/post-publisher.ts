/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublisherDto } from '../../models/publisher-dto';

export interface PostPublisher$Params {
  
    /**
     * Body for creating Publisher
     */
    body: PublisherDto
}

export function postPublisher(http: HttpClient, rootUrl: string, params: PostPublisher$Params, context?: HttpContext): Observable<StrictHttpResponse<PublisherDto>> {
  const rb = new RequestBuilder(rootUrl, postPublisher.PATH, 'post');
  if (params) {
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

postPublisher.PATH = '/publisher';
