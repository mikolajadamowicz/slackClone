import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation'; 

import Drawer from '../Screens/Drawer';
import Channel from "../Screens/Channel";


const DrawerStack = createDrawerNavigator(
  {
    Channel: {
      screen: Channel
    }
  },
  {
    initialRouteName: "Channel",
    initialRouteParams:{ title:'general' },
    contentComponent: Drawer
  }
);

export default DrawerStack;
