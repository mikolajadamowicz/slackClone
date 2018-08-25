import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation'; 

import Drawer from '../src/Drawer';
import Channel from "../src/Channel";


const DrawerStack = createDrawerNavigator(
  {
    Channel: {
      screen: Channel
    }
  },
  {
    initialRouteName: "Channel",
    contentComponent: Drawer
  }
);

export default DrawerStack;
