import {DependenciesOf, injectComponent} from 'react-obsidian';
import BookGraph from '../../../core/di/book';
import {BookTileRenderer} from '../../../components/organisms';
import {Screen} from '../../../components/templates';

type Props = DependenciesOf<BookGraph, 'useBookListViewModel'>;

function BookList({useBookListViewModel}: Props) {
  const {getBooks} = useBookListViewModel();

  return (
    <Screen>
      <BookTileRenderer {...getBooks} pullRefresh={getBooks?.pullRefresh} />
    </Screen>
  );
}

export default injectComponent(BookList, BookGraph);
