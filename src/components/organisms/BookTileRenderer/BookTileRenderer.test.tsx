import {render, screen} from '@testing-library/react-native';
import {DUMMY_IMAGE_URL} from '../../../constants/components';
import BookTileRenderer from './';

const books = ['book1', 'book2', 'book3', 'book4', 'book5'].map(book => ({
  id: book,
  title: 'Book Title',
  description: 'desc',
  price: 20,
  cover: DUMMY_IMAGE_URL,
}));

describe('Book Tile renderer', () => {
  it('Given X books, render X tiles of books', () => {
    render(<BookTileRenderer data={books} />);

    expect(screen.queryAllByText('Book Title')).toHaveLength(books.length);
  });
});
