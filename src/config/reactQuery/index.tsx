import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';
import toast from '../../utils/toast';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error) {
      if (
        typeof error === 'object' &&
        !!error &&
        'message' in error &&
        typeof error?.message === 'string'
      )
        toast.show(error?.message);
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
        console.log(error?.message);
    },
  }),
});

queryClientTest.setDefaultOptions({
  queries: {cacheTime: 0, retry: false},
});

export const wrapper = ({children}: any) => (
  <QueryClientProvider client={queryClientTest}>{children}</QueryClientProvider>
);
