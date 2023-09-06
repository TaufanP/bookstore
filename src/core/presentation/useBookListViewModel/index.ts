import {BookRepository} from '../../domain/repositories/book';
import {useGetBooksCase} from '../../domain/useCases/book/useGetBooksCase';

export default function (repo: BookRepository) {
  const {data} = useGetBooksCase(repo);

  return {books: data};
}
