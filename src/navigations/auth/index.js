import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding, Login, ChooseRole, Register} from 'scenes';

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthStack.Screen name="Login" component={Login} />
    {/* <AuthStack.Screen name="ChooseRole" component={ChooseRole} /> */}
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
