import {Toast} from 'react-native-toast-notifications';
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error) {
      if (
        typeof error === 'object' &&
        !!error &&
        'message' in error &&
        typeof error?.message === 'string'
      )
        Toast.show(error?.message);
    },
  }),
});

const queryClientTest = new QueryClient({
  queryCache: new QueryCache({
    onError(error) {
      if (
        typeof error === 'object' &&
        !!error &&
        'message' in error &&
        typeof error?.message === 'string'
      )
        return error?.message;
    },
  }),
});

queryClientTest.setDefaultOptions({
  queries: {cacheTime: 0, retry: false},
});

export const wrapper = ({children}: any) => (
  <QueryClientProvider client={queryClientTest}>{children}</QueryClientProvider>
);
