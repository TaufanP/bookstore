import {Book} from '../../../domain/models/book';

export interface BookApiDataSource {
  addBook(book: Book): Promise<Book>;
  getBooks(): Promise<Book[]>;
  updateBook(book: Book): Promise<Book>;
  deleteBook(id: Book['id']): Promise<Book>;
}
