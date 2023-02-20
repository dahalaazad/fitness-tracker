import {AuthStack, HomeStack, ProfileStack} from '@app/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />

        <Stack.Screen name="HomeStack" component={HomeStack} />

        <Stack.Screen name="ProfileStack" component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
