import {StyleSheet, Text, View} from 'react-native';

const ResultScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>ResultScreen</Text>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000',
  },
});
