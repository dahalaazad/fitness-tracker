import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStack, HomeStack, ProfileStack} from '@app/routes';

const Stack = createStackNavigator();

const App = () => {
  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Group>
            <Stack.Screen name="HomeStack" component={HomeStack} />

            <Stack.Screen name="ProfileStack" component={ProfileStack} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
