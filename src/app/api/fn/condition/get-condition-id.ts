/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConditionDto } from '../../models/condition-dto';

export interface GetConditionId$Params {

/**
 * Id of record to operate
 */
  id: number;
}

export function getConditionId(http: HttpClient, rootUrl: string, params: GetConditionId$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
  const rb = new RequestBuilder(rootUrl, getConditionId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ConditionDto>;
    })
  );
}

getConditionId.PATH = '/condition/{id}';
