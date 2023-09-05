import {Book} from '../../models/book';

export interface BookRepository {
  getBooks(): Promise<Book[]>;
  insertBook(book: Book): Promise<Book>;
  updateBook(book: Book): Promise<Book>;
  deleteBook(id: Book['id']): Promise<Book>;
}
