import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabStackScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen />
    </Tab.Navigator>
  );
};

export default TabStackScreen;
