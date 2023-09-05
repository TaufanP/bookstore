import {transformBooks} from '../../../../parser/book';
import bookApi from '../../../../services/book';
import {Book} from '../../../domain/models/book';
import {BookApiDataSource} from '../../dataSources/book';

export default class BookApiDataSourceImp implements BookApiDataSource {
  async getBooks(): Promise<Book[]> {
    const {data} = await bookApi.get();
    return transformBooks(data);
  }

  async deleteBook(id: string): Promise<Book> {
    try {
      const result: any = await bookApi.get();
      return result.data;
    } catch (error) {
      return {} as any;
    }
  }

  async addBook(book: Book): Promise<Book> {
    try {
      const result: any = await bookApi.get();
      return result.data;
    } catch (error) {
      return book as any;
    }
  }

  async updateBook(book: Book): Promise<Book> {
    try {
      const result: any = await bookApi.get();
      return result.data;
    } catch (error) {
      return book as any;
    }
  }
}
