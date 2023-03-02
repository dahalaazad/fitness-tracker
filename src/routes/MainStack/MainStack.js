import {View, Text, TouchableOpacity, Image} from 'react-native';

import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import {UserImageIcon} from '@app/components';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

        headerTitleStyle: {color: Colors.whiteColor},
        headerStyle: {
          backgroundColor: Colors.primaryRedColor,
          height: heightToDp(90),
          borderBottomLeftRadius: widthToDp(32),
          borderBottomRightRadius: widthToDp(32),
        },
        headerLeft: () => null,
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

          headerLeft: () => null,
          headerRight: () => <UserImageIcon navigation={navigation} />,
        }}
      />

      <Stack.Screen
        name="AddWorkoutScreen"
        component={AddWorkoutScreen}
        options={{
          title: 'Add Workout',
          headerTitleAlign: 'center',
          headerTitleContainerStyle: {
            paddingTop: heightToDp(20),
          },
          headerTitleStyle: {
            fontFamily: 'Poppins',
            fontSize: widthToDp(20),
            fontWeight: '500',
            color: Colors.whiteColor,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: widthToDp(25), paddingTop: heightToDp(20)}}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Ionicons
                name="ios-chevron-back"
                size={35}
                color={Colors.whiteColor}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />

      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />

      <Stack.Screen name="ResultScreen" component={ResultScreen} />

      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      <Stack.Screen
        name="WorkoutHistoryScreen"
        component={WorkoutHistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
