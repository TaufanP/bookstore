import {useQuery} from 'react-query';
import {BookRepository} from '../../../repositories/book';
import {Book} from '../../../models/book';

export function useGetBooksCase(repository: BookRepository): {
  data: Book[];
  error?: unknown;
} {
  const {data, error} = useQuery({
    queryKey: ['books', 'list'],
    queryFn: () => repository.getBooks(),
  });
  return {data: data || [], error};
}
