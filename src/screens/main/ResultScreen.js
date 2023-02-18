import {StyleSheet, Text, View} from 'react-native';

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ResultScreen</Text>
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
});
