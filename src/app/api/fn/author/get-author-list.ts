/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthorDto } from '../../models/author-dto';
import { PageDto } from '../../models/page-dto';

export interface GetAuthorList$Params {

/**
 * Page number
 */
  pageNumber?: number;

/**
 * Page size
 */
  pageSize?: number;

/**
 * Sorting field
 */
  sortBy?: string;

/**
 * Sorting direction
 */
  sortDir?: 'ASC' | 'DESC';
}

export function getAuthorList(http: HttpClient, rootUrl: string, params?: GetAuthorList$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDto & {

/**
 * List of records to show
 */
'records'?: Array<AuthorDto>;
}>> {
  const rb = new RequestBuilder(rootUrl, getAuthorList.PATH, 'get');
  if (params) {
    rb.query('pageNumber', params.pageNumber, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('sortBy', params.sortBy, {});
    rb.query('sortDir', params.sortDir, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageDto & {
      
      /**
       * List of records to show
       */
      'records'?: Array<AuthorDto>;
      }>;
    })
  );
}

getAuthorList.PATH = '/author/list';
