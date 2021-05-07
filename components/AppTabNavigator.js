import React, { Component } from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';

export const TabNavigator = createBottomTabNavigator({
    Home_Screen :{screen: HomeScreen},
    Exchange_Screen :{screen: ExchangeScreen},
  })