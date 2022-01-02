import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStackScreen from '../tab';
import {Property, SearchTenant} from 'scenes';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="root">
      <Stack.Screen name="root" component={TabStackScreen} />
      <Stack.Screen name="Property" component={Property} />
      <Stack.Screen name="SearchTenant" component={SearchTenant} />
    </Stack.Navigator>
  );
};

export default AppStack;
