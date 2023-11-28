import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import StatusHeader from './src/components/StatusHeader';
import appStore from './src/store/store';

export default function App() {
  const Stack = createNativeStackNavigator();

  const routes: { name: string; elem: (props: any) => React.JSX.Element }[] =
    [];

  return (
    <Provider store={appStore}>
      <NavigationContainer>
        {/* <View style={styles.container} /> */}
        <StatusHeader />

        <Stack.Navigator screenOptions={{}} initialRouteName="Index">
          {routes.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.elem}
              options={{ headerShown: false }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
