import * as React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {createSwitchNavigator , createAppContainer} from 'react-navigation';
import { AppDrawerNavigator } from './/components/AppDrawerNavigator';

export default function App() {
  return (
    <View>
    <SignupLoginScreen/>
    <AppContainer/>
    </View>
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {
    screen : SignupLoginScreen 
  },
  Drawer : {
    screen : AppDrawerNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator)





