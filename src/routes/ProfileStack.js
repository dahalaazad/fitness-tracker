import {ProfileScreen, WorkoutHistoryScreen} from '@app/screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      <Stack.Screen
        name="WorkoutHistoryScreen"
        component={WorkoutHistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
