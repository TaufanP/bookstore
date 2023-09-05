import {render, screen} from '@testing-library/react-native';
import {DUMMY_IMAGE_URL} from '../../../constants/components';
import testId from '../../../constants/testId';
import BookTile from './index';

const book = {
  title: 'Never Do It Again!',
  description: 'book desc',
  price: 20000,
  cover: DUMMY_IMAGE_URL,
};

describe('Book Tile', () => {
  beforeEach(() => {
    render(<BookTile {...book} />);
  });

  it('Display title of the book', () => {
    expect(screen.getByText(book.title)).toBeTruthy();
  });

  it('Display description of the book', () => {
    expect(screen.getByText(book.description)).toBeTruthy();
  });

  it('Display proper price of the book', () => {
    expect(screen.getByText('$20,000')).toBeTruthy();
  });

  it('Display the cover of the book', () => {
    expect(screen.getByTestId(testId.PICTURE_ATOM).props.source.uri).toEqual(
      DUMMY_IMAGE_URL,
    );
  });
});
