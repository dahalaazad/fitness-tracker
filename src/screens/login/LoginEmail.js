import {StyleSheet, Text, View, Button} from 'react-native';

const LoginEmail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>LoginEmail</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('HomeStack')}
      />
    </View>
  );
};

export default LoginEmail;

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
