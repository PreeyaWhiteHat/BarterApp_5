import { TabNavigator } from '../components/AppTabNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: TabNavigator
    },
    Settings : {
      screen : SettingsScreen
    }
  },
    {
      contentComponent : CustomSideBarMenu
    },
    {
     initialRouteName : 'Home' 
  
  })