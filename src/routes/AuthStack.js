import {LoginEmail, LoginMain, Signup} from '@app/screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginMain" component={LoginMain} />

      <Stack.Screen name="LoginEmail" component={LoginEmail} />

      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
