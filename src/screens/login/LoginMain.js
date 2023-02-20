import {StyleSheet, Text, View, Button} from 'react-native';

const LoginMain = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>LoginMain</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('LoginEmail')}
      />
    </View>
  );
};

export default LoginMain;

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
