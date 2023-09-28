/* tslint:disable */
/* eslint-disable */
import { BookDto } from '../models/book-dto';
import { UserDto } from '../models/user-dto';
export interface OrderDto {
  books?: Array<BookDto>;
  date?: string;
  id?: number;
  user: UserDto;
}
