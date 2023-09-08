import {useQuery} from 'react-query';
import {BookRepository} from '../../../repositories/book';
import {Book} from '../../../models/book';

export function useGetBooksCase(repository: BookRepository): {
  data: Book[];
  error?: any;
  isLoading: boolean;
  isError?: boolean;
} {
  const {data, error, isLoading, isError} = useQuery({
    queryKey: ['books', 'list'],
    queryFn: () => repository.getBooks(),
  });
  return {data: data || [], error, isLoading, isError};
}
