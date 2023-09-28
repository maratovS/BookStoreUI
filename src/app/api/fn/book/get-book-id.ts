/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BookDto } from '../../models/book-dto';

export interface GetBookId$Params {

/**
 * Id of record to operate
 */
  id: number;
}

export function getBookId(http: HttpClient, rootUrl: string, params: GetBookId$Params, context?: HttpContext): Observable<StrictHttpResponse<BookDto>> {
  const rb = new RequestBuilder(rootUrl, getBookId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BookDto>;
    })
  );
}

getBookId.PATH = '/book/{id}';
