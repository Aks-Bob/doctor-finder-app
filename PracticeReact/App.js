import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationDrawer from './NavigationDrawer';

export default function App() {
  return (
    <View style={ styles.container}>
      <NavigationDrawer />
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
