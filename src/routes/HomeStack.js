import {
  HomeScreen,
  AddWorkoutScreen,
  WorkoutScreen,
  ExerciseScreen,
  ResultScreen,
} from '@app/screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddWorkoutScreen" component={AddWorkoutScreen} />
      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
