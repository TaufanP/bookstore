import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/config/reactQuery';
import Routes from './src/routes';
import {ToastProvider} from 'react-native-toast-notifications';

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </QueryClientProvider>
  );
}
