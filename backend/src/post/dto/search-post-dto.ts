import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class SearchPostDto {
  title?: string;

  body?: string;

  limit?: number;

  take?: number;

  sortBy?: 'views' | 'popular';

  increaseStatus?: 'DESC' | 'ASC';
}
