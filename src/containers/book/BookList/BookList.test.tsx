import {render, screen} from '@testing-library/react-native';
import {QueryUseCase} from '../../../../types/useCase';
import {DUMMY_IMAGE_URL} from '../../../constants/components';
import {Book} from '../../../core/domain/models/book';
import BookList from './';

const books = ['book1', 'book2', 'book3', 'book4', 'book5'].map(book => ({
  id: book,
  title: 'Book Title',
  description: 'desc',
  price: 20,
  cover: DUMMY_IMAGE_URL,
}));

const buttonLabel = 'Add Book';
const emptyDescription = 'Add your first book!';
const error = 'Cannot retrieve the books.';
const loadingDescription = 'Getting our best collections...';

type Model = () => QueryUseCase<Book>;
let useBookListViewModel: Model;

beforeEach(() => {
  useBookListViewModel = () => ({data: []});
});

describe('Book List Screen', () => {
  it('Display list of books', () => {
    useBookListViewModel = jest.fn().mockReturnValue({data: books});

    render(<BookList useBookListViewModel={useBookListViewModel} />);

    expect(screen.queryAllByText('Book Title')).toHaveLength(books.length);
    commonTest();
  });

  describe('Empty state', () => {
    beforeEach(() => {
      useBookListViewModel = jest.fn().mockReturnValue({data: []});

      render(<BookList useBookListViewModel={useBookListViewModel} />);
    });

    it('Should display empty state message', () => {
      expect(screen.getByText(emptyDescription)).toBeTruthy();
      commonTest('empty');
    });

    it('Should provide call to action button', () => {
      expect(screen.getByText(buttonLabel)).toBeTruthy();
      commonTest('empty');
    });
  });

  describe('Error state', () => {
    it('Should show error state when failed to retrieve the first collection of books', () => {
      useBookListViewModel = jest.fn().mockReturnValue({
        data: [],
        isError: true,
        error,
      });

      render(<BookList useBookListViewModel={useBookListViewModel} />);

      expect(screen.getByText(error)).toBeTruthy;
      commonTest('error');
    });
  });

  describe('Loading state', () => {
    it('Should show the loading state when retrieving the collection for the first time', () => {
      useBookListViewModel = jest.fn().mockReturnValue({
        data: [],
        isLoading: true,
      });

      render(<BookList useBookListViewModel={useBookListViewModel} />);

      expect(screen.getByText(loadingDescription)).toBeTruthy();
      commonTest('loading');
    });
  });
});

function commonTest(type?: 'loading' | 'error' | 'empty' | undefined) {
  if (type !== 'empty') {
    expect(screen.queryByText(emptyDescription)).toBeNull();
    expect(screen.queryByText(buttonLabel)).toBeNull();
  }
  if (type !== 'loading')
    expect(screen.queryByText(loadingDescription)).toBeNull();
  if (type !== 'error') expect(screen.queryByText(error)).toBeNull();
}
