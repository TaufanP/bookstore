import {DependenciesOf, injectComponent} from 'react-obsidian';
import BookGraph from '../../../core/di/book';
import {BookTileRenderer} from '../../../components/organisms';
import {Screen} from '../../../components/templates';

type Props = DependenciesOf<BookGraph, 'useBookListViewModel'>;

function BookList({useBookListViewModel}: Props) {
  const books = useBookListViewModel();

  return (
    <Screen>
      <BookTileRenderer {...books} />
    </Screen>
  );
}

export default injectComponent(BookList, BookGraph);
