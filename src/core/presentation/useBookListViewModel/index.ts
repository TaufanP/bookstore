import {BookRepository} from '../../domain/repositories/book';
import useGetBooksCase from '../../domain/useCases/book/useGetBooksCase';

export default function (repo: BookRepository) {
  const getBooks = useGetBooksCase(repo);

  return {getBooks};
}
