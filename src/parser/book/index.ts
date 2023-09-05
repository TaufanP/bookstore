import {getOr} from 'lodash/fp';
import {Book} from '../../core/domain/models/book';

export function transformBooks(data: any): Book[] {
  if (Array.isArray(data)) {
    return data?.map(book => ({
      cover: getOr('', 'image_cover', book),
      description: getOr('', 'description', book),
      id: getOr('', 'id', book),
      price: getOr(0, 'price', book),
      title: getOr('', 'title', book),
    }));
  } else {
    return [];
  }
}
