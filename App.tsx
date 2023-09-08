import {QueryClientProvider} from '@tanstack/react-query';
import {ToastProvider} from 'react-native-toast-notifications';
import {queryClient} from './src/config/reactQuery';
import Routes from './src/routes';

export default function () {
  return (
    <ToastProvider
      duration={5000}
      animationDuration={250}
      successColor="green"
      dangerColor="red"
      warningColor="orange"
      normalColor="gray"
    >
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ToastProvider>
  );
}
