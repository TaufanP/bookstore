import {DUMMY_IMAGE_URL} from '../../constants/components';
import {transformBooks} from './';

const dummyData = [
  {
    id: 'a',
    title: 'title',
    description: 'desc',
    price: 21,
    image_cover: DUMMY_IMAGE_URL,
  },
  {
    id: 'b',
    title: 'title2',
    description: 'desc2',
    price: 100,
    image_cover: DUMMY_IMAGE_URL,
  },
];
const books = transformBooks(dummyData);
const selectedData = 0;

describe('Book Parser', () => {
  it('Given nullish value, returns empty array', () => {
    expect(transformBooks(undefined)).toEqual([]);
    expect(transformBooks(null)).toEqual([]);
  });

  it('Given BookAPI Model, returns Book Model', () => {
    expect(books[selectedData]).toHaveProperty(
      'id',
      dummyData[selectedData].id,
    );
    expect(books[selectedData]).toHaveProperty(
      'title',
      dummyData[selectedData].title,
    );
    expect(books[selectedData]).toHaveProperty(
      'description',
      dummyData[selectedData].description,
    );
    expect(books[selectedData]).toHaveProperty(
      'price',
      dummyData[selectedData].price,
    );
    expect(books[selectedData]).toHaveProperty(
      'cover',
      dummyData[selectedData].image_cover,
    );
  });

  it('Given X books from API, returns X books', () => {
    expect(books).toHaveLength(2);
  });
});
