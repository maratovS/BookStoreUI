/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthorDto } from '../../models/author-dto';

export interface PostAuthor$Params {
  
    /**
     * Body for creating Author
     */
    body: AuthorDto
}

export function postAuthor(http: HttpClient, rootUrl: string, params: PostAuthor$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthorDto>> {
  const rb = new RequestBuilder(rootUrl, postAuthor.PATH, 'post');
  if (params) {
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

postAuthor.PATH = '/author';
