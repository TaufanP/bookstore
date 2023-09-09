import {useQuery} from '@tanstack/react-query';
import {BookRepository} from '../../../repositories/book';
import {Book} from '../../../models/book';
import {QueryUseCase} from '../../../../../../types/useCase';

export default function (repository: BookRepository): QueryUseCase<Book> {
  const {data, error, isLoading, isError} = useQuery({
    queryKey: ['books', 'list'],
    queryFn: () => repository.getBooks(),
  });
  //@ts-ignore
  return {data: data || [], error: error?.message, isLoading, isError};
}
