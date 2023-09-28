/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthorDto } from '../../models/author-dto';

export interface GetAuthorId$Params {

/**
 * Id of record to operate
 */
  id: number;
}

export function getAuthorId(http: HttpClient, rootUrl: string, params: GetAuthorId$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthorDto>> {
  const rb = new RequestBuilder(rootUrl, getAuthorId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthorDto>;
    })
  );
}

getAuthorId.PATH = '/author/{id}';
