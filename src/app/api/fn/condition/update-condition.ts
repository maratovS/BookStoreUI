/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConditionDto } from '../../models/condition-dto';

export interface UpdateCondition$Params {

/**
 * Id of record to operate
 */
  id: number;
  
    /**
     * Body for updating Condition
     */
    body: ConditionDto
}

export function updateCondition(http: HttpClient, rootUrl: string, params: UpdateCondition$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
  const rb = new RequestBuilder(rootUrl, updateCondition.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updateCondition.PATH = '/condition/{id}';
