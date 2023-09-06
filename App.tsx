import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/config/reactQuery';
import Routes from './src/routes';
import {ToastProvider} from 'react-native-toast-notifications';

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
