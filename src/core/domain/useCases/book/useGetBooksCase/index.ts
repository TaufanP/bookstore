import {useQuery} from '@tanstack/react-query';
import {BookRepository} from '../../../repositories/book';
import {Book} from '../../../models/book';
import {QueryUseCase} from '../../../../../../types/useCase';
import {useRefetch} from '../../../../../hooks';

export default function (repository: BookRepository): QueryUseCase<Book> {
  const {data, error, isLoading, isError, refetch} = useQuery({
    queryKey: ['books', 'list'],
    queryFn: () => repository.getBooks(),
  });

  const pullRefresh = useRefetch(refetch);

  return {
    data: data || [],
    //@ts-ignore
    error: error?.message,
    isLoading,
    isError,
    pullRefresh,
  };
}
