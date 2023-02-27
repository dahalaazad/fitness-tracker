import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors, Images} from '@app/constants';
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

              <Text style={Styles.headerTextBottom}>{`${'John Doe'}`}</Text>
            </View>
          ),

          headerStyle: {
            height: heightToDp(135),
            backgroundColor: Colors.primaryRedColor,
            borderBottomLeftRadius: widthToDp(32),
            borderBottomRightRadius: widthToDp(32),
          },

          headerTitleContainerStyle: {
            paddingLeft: widthToDp(15),
          },
          headerBackgroundContainerStyle: {
            backgroundColor: Colors.whiteColor,
          },

          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity
              style={Styles.headerImageContainer}
              onPress={() => navigation.navigate('ProfileStack')}>
              <Image style={Styles.headerImage} source={Images.userImageIcon} />
            </TouchableOpacity>
          ),
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
