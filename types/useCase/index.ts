import {ListViewProps} from '../../src/components/atoms/ListView';

export interface QueryUseCase<T> {
  data: T[];
  error?: any;
  isLoading?: boolean;
  isError?: boolean;
  pullRefresh?: ListViewProps<any>['pullRefresh'];
}
