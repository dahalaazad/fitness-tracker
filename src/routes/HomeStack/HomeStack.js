import {View, Text, TouchableOpacity, Image} from 'react-native';

import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import {UserImageIcon} from '@app/components';
import {Colors} from '@app/constants';
import {
  HomeScreen,
  AddWorkoutScreen,
  WorkoutScreen,
  ExerciseScreen,
  ResultScreen,
} from '@app/screens';
import {heightToDp, widthToDp} from '@app/utils';
import {Styles} from './HomeStackStyles';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  const userName = useSelector(state => state?.auth?.userInfo?.name);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {color: Colors.whiteColor},
        headerStyle: {backgroundColor: Colors.primaryRedColor},
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View>
              <Text style={Styles.headerTextTop}>Good Morning,</Text>

              <Text style={Styles.headerTextBottom}>{`${
                userName || 'User Name'
              }`}</Text>
            </View>
          ),

          headerStyle: Styles.homeScreenHeaderStyle,

          headerTitleContainerStyle: {
            paddingLeft: widthToDp(15),
          },
          headerBackgroundContainerStyle: {
            backgroundColor: Colors.whiteColor,
          },

          headerLeft: () => null,
          headerRight: () => <UserImageIcon navigation={navigation} />,
        }}
      />

      <Stack.Screen name="AddWorkoutScreen" component={AddWorkoutScreen} />

      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />

      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />

      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
