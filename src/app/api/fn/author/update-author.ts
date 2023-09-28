/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthorDto } from '../../models/author-dto';

export interface UpdateAuthor$Params {

/**
 * Id of record to operate
 */
  id: number;
  
    /**
     * Body for updating Author
     */
    body: AuthorDto
}

export function updateAuthor(http: HttpClient, rootUrl: string, params: UpdateAuthor$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthorDto>> {
  const rb = new RequestBuilder(rootUrl, updateAuthor.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updateAuthor.PATH = '/author/{id}';
