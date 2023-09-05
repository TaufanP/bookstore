import {renderHook, waitFor} from '@testing-library/react-native';
import {mock} from 'jest-mock-extended';
import {when} from 'jest-when';
import {useGetBooksCase} from './';
import {BookRepository} from '../../../repositories/book';
import {wrapper} from '../../../../../config/reactQuery';

let repository: BookRepository;

beforeEach(() => {
  repository = mock();
});

describe('Get Books Use Case', () => {
  it('useGetBooksCase should call repository.getBooks', async () => {
    when(repository.getBooks).mockResolvedValue([
      {id: 'test1', title: 'test1', description: '', price: 0, cover: ''},
      {id: 'test2', title: 'test2', description: '', price: 0, cover: ''},
    ]);

    const {result} = renderHook(() => useGetBooksCase(repository), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current).toHaveLength(2);
      expect(result.current?.[0]?.title).toEqual('test1');
      expect(repository.getBooks).toHaveBeenCalledTimes(1);
    });
  });

  it('should return empty array when network call failed', async () => {
    when(repository.getBooks).mockRejectedValue(
      new Error('Something is wrong!'),
    );

    const {result} = renderHook(() => useGetBooksCase(repository), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current).toBeInstanceOf(Array);
      expect(result.current).toHaveLength(0);
      expect(repository.getBooks).toHaveBeenCalledTimes(1);
    });
  });
});
