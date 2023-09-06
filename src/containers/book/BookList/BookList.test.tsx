import {render, screen} from '@testing-library/react-native';
import BookList from './';
import {DUMMY_IMAGE_URL} from '../../../constants/components';
import {Book} from '../../../core/domain/models/book';

const books = ['book1', 'book2', 'book3', 'book4', 'book5'].map(book => ({
  id: book,
  title: 'Book Title',
  description: 'desc',
  price: 20,
  cover: DUMMY_IMAGE_URL,
}));

type Model = () => {books: Book[]};
let useBookListViewModel: Model;

describe('Book List Screen', () => {
  it('Display list of books', () => {
    useBookListViewModel = jest.fn().mockReturnValue({books});

    render(<BookList useBookListViewModel={useBookListViewModel} />);

    expect(screen.queryAllByText('Book Title')).toHaveLength(books.length);
    expect(screen.queryByText('Add your first book!')).toBeNull();
    expect(screen.queryByText('Add Book')).toBeNull();
  });

  describe('Empty Book list', () => {
    beforeEach(() => {
      useBookListViewModel = jest.fn().mockReturnValue({books: []});

      render(<BookList useBookListViewModel={useBookListViewModel} />);
    });

    it('Should display empty state message', () => {
      expect(screen.getByText('Add your first book!')).toBeTruthy();
    });

    it('Should provide call to action button', () => {
      expect(screen.getByText('Add Book')).toBeTruthy();
    });
  });
});
