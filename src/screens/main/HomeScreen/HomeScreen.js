import {
  Text,
  View,
  Button,
  StatusBar,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {PrimaryButton, WorkoutCard} from '@app/components';
import {Colors, Images} from '@app/constants';
import {heightToDp, width, widthToDp} from '@app/utils';
import {AddIcon, SkippingIcon} from '@app/assets/svg';
import {Styles} from './HomeScreenStyles';
import {getAllWorkout} from '@app/redux/slices/fitness/fitnessSlice';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const workoutList = useSelector(state => state?.fitness?.workoutList);

  useEffect(() => {
    dispatch(getAllWorkout());
  }, [dispatch]);

  return (
    <>
      {workoutList.length > 0 ? (
        <View style={Styles.mainContainer}>
          <Text style={Styles.workoutTitleStyle}>My Workouts</Text>

          <FlatList
            data={workoutList}
            renderItem={({item}) => (
              <WorkoutCard workoutName={item?.attributes?.name} />
            )}
            keyExtractor={item => item?.id}
            contentContainerStyle={{
              justifyContent: 'flex-start',
            }}
          />

          <TouchableOpacity
            style={Styles.addIconContainer}
            onPress={() => navigation.navigate('AddWorkoutScreen')}>
            <AddIcon />
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={Styles.container}>
          <StatusBar backgroundColor="#000" />

          <View style={{flex: 1}}>
            <View style={Styles.mainItemContainer}>
              <View style={{paddingBottom: heightToDp(24)}}>
                <SkippingIcon />
              </View>

              <Text style={Styles.textStyle}>
                You haven’t added any workout yet.
              </Text>
            </View>

            <PrimaryButton
              buttonLabel="ADD NEW WORKOUT"
              buttonBgColor={Colors.primaryRedColor}
              buttonTextColor={Colors.whiteColor}
              onPressHandler={() => navigation.navigate('AddWorkoutScreen')}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default HomeScreen;
