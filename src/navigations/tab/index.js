import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'components';
import Icons from './icons.json';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {Home, Tenant, Inbox, Profile} from 'scenes';
import {Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from 'styles';

const Tab = createBottomTabNavigator();

const TabIcon = ({routeName, focused, color, size}) => {
  let iconName = Icons[routeName];
  return (
    <Icon
      name={iconName.name}
      type={iconName.type}
      style={{color: color, fontSize: RFValue(20), marginTop: width * 0.01}}
    />
  );
};

const TabStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return (
            <TabIcon
              routeName={route.name}
              focused={focused}
              color={focused ? Colors.PRIMARY : Colors.LINE_STROKE}
            />
          );
        },
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.GREY_TEXT,
        tabBarLabelStyle: {
          marginBottom: width * 0.01,
          fontFamily: FONTS.poppins[500],
        },
        tabBarStyle: {
          height: width * 0.13,
        },
      })}>
      <Tab.Screen name="Beranda" component={Home} />
      <Tab.Screen name="Penyewa" component={Tenant} />
      <Tab.Screen name="Pesan" component={Inbox} />
      <Tab.Screen name="Profil" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabStackScreen;
