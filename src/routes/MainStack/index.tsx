import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BookList} from '../../containers/book';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Home" component={BookList} />
    </Stack.Navigator>
  );
}
