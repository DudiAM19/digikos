import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStackScreen from '../tab';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="root" component={TabStackScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
