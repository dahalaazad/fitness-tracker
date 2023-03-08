import {View, Text, TouchableOpacity, Image} from 'react-native';

import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeScreenHeaderItems, UserImageIcon} from '@app/components';
import {Colors, Images} from '@app/constants';
import {
  HomeScreen,
  AddWorkoutScreen,
  WorkoutScreen,
  ExerciseScreen,
  ResultScreen,
  ProfileScreen,
  WorkoutHistoryScreen,
} from '@app/screens';
import {heightToDp, widthToDp} from '@app/utils';
import {Styles} from './MainStackStyles';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  const userName = useSelector(state => state?.auth?.userInfo?.name);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackgroundContainerStyle: {
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: Colors.whiteColor,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Poppins',
          fontSize: widthToDp(20),
          fontWeight: '500',
          color: Colors.whiteColor,
          paddingTop: heightToDp(20),
        },
        headerStyle: {
          backgroundColor: Colors.primaryRedColor,
          height: heightToDp(90),
          borderBottomLeftRadius: widthToDp(32),
          borderBottomRightRadius: widthToDp(32),
        },
        headerBackImage: () => (
          <View
            style={{
              padding: widthToDp(10),
              marginLeft: widthToDp(10),
              marginTop: heightToDp(20),
              // backgroundColor: Colors.blackColor,
            }}>
            <Ionicons
              name="ios-chevron-back"
              size={30}
              color={Colors.whiteColor}
            />
          </View>
        ),
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => <HomeScreenHeaderItems userName={userName} />,

          headerStyle: Styles.homeScreenHeaderStyle,
          headerTitleAlign: 'left',
          headerTitleContainerStyle: {
            paddingLeft: widthToDp(15),
          },

          headerRight: () => (
            <View style={{marginRight: widthToDp(30)}}>
              <UserImageIcon navigation={navigation} />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="AddWorkoutScreen"
        component={AddWorkoutScreen}
        options={{
          title: 'Add Workout',
        }}
      />

      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />

      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />

      <Stack.Screen name="ResultScreen" component={ResultScreen} />

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />

      <Stack.Screen
        name="WorkoutHistoryScreen"
        component={WorkoutHistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
