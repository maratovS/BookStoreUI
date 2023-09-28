/* tslint:disable */
/* eslint-disable */

/**
 * List of PublisherDto with pagination info
 */
export interface PageDto {

  /**
   * Current page
   */
  page: number;

  /**
   * Quantity of records per page
   */
  pageSize: number;

  /**
   * sorting direction
   */
  sortDir?: 'ASC' | 'DESC';

  /**
   * sorting field
   */
  sortField?: string;

  /**
   * Total page
   */
  totalPages: number;

  /**
   * total numbers of rows for the request
   */
  totalRows?: number;
}
