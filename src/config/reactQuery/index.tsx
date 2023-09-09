import {Toast} from 'react-native-toast-notifications';
import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
} from '@tanstack/react-query';
import {render} from '@testing-library/react-native';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error: any) {
      Toast.show(error?.message);
    },
  }),
});

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: () => {},
      warn: () => {},
      error: () => {},
    },
  });

export const wrapper = ({children}: any) => (
  <QueryClientProvider client={createTestQueryClient()}>
    {children}
  </QueryClientProvider>
);

export const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({children}: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const {rerender, ...result} = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  };
}
