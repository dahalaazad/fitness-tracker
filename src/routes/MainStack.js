import {createStackNavigator} from '@react-navigation/stack';

import {HomeStack} from './HomeStack';
import ProfileStack from './ProfileStack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />

      <Stack.Screen name="ProfileStack" component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
