import {Graph, ObjectGraph, Provides, Singleton} from 'react-obsidian';
import BookApiDataSourceImp from '../../data/dataSourcesImp/book';
import {BookApiDataSource} from '../../data/dataSources/book';
import BookRepositoryImp from '../../data/repositoriesImp/book';
import useBookListViewModel from '../../presentation/useBookListViewModel';
import {BookRepository} from '../../domain/repositories/book';

@Singleton()
@Graph()
export default class BookGraph extends ObjectGraph {
  @Provides()
  datasource(): BookApiDataSourceImp {
    return new BookApiDataSourceImp();
  }

  @Provides()
  repo(datasource: BookApiDataSource): BookRepository {
    return new BookRepositoryImp(datasource);
  }

  @Provides()
  useBookListViewModel(repo: BookRepository) {
    return () => useBookListViewModel(repo);
  }
}
