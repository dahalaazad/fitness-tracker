import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStack, MainStack} from '@app/routes';

const Stack = createStackNavigator();

const App = () => {
  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="MainStack" component={MainStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
