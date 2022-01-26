import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackScreen from './auth';
import AppStack from './app';
import {Colors} from 'styles';
import {useSelector} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';

const RootStack = createNativeStackNavigator();
const RootStackScreen = ({userToken}) => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {userToken ? (
        <RootStack.Screen name="app" component={AppStack} />
      ) : (
        <RootStack.Screen name="auth" component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  );
};

const RootNavigator = () => {
  const userToken = useSelector(state => state.auth.userToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="small" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  );
};

export default RootNavigator;
