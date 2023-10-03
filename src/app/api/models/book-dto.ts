/* tslint:disable */
/* eslint-disable */
import { AuthorDto } from '../models/author-dto';
import { CategoryDto } from '../models/category-dto';
import { ConditionDto } from '../models/condition-dto';
import { PublisherDto } from '../models/publisher-dto';
export interface BookDto {
  author?: AuthorDto;
  category?: CategoryDto;
  condition?: ConditionDto;
  description?: string;
  id?: number;
  poster?: string;
  price?: number;
  publicationYear?: number;
  publisher?: PublisherDto;
  title: string;
}
