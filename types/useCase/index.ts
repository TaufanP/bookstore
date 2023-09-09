export interface QueryUseCase<T> {
  data: T[];
  error?: any;
  isLoading?: boolean;
  isError?: boolean;
}
