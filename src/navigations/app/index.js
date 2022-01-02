import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStackScreen from '../tab';
import {Property} from 'scenes';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="root">
      <Stack.Screen name="root" component={TabStackScreen} />
      <Stack.Screen name="Property" component={Property} />
    </Stack.Navigator>
  );
};

export default AppStack;
