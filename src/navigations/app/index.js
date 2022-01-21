import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStackScreen from '../tab';
import {
  Property,
  SearchTenant,
  DetailTenant,
  NeedApprovel,
  Notification,
  NewProperty,
  BillPayment,
  TenantComplaint,
  TenantOperation,
  Failure,
  SubscriptionDetails,
  DetailBillPayment,
} from 'scenes';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="root">
      <Stack.Screen name="root" component={TabStackScreen} />
      <Stack.Screen name="Property" component={Property} />
      <Stack.Screen name="SearchTenant" component={SearchTenant} />
      <Stack.Screen name="DetailTenant" component={DetailTenant} />
      <Stack.Screen name="NeedApprovel" component={NeedApprovel} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="NewProperty" component={NewProperty} />
      <Stack.Screen name="BillPayment" component={BillPayment} />
      <Stack.Screen name="TenantComplaint" component={TenantComplaint} />
      <Stack.Screen name="TenantOperation" component={TenantOperation} />
      <Stack.Screen name="Failure" component={Failure} />
      <Stack.Screen
        name="SubscriptionDetails"
        component={SubscriptionDetails}
      />
      <Stack.Screen name="DetailBillPayment" component={DetailBillPayment} />
    </Stack.Navigator>
  );
};

export default AppStack;
