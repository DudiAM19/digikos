import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Container, Header, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useProfile from './useProfile';

const DATA = [
  {
    name: 'Pengaturan Akun',
    icon: 'settings-outline',
    icontype: 'Ionicons',
    color: Colors.ORANGE,
    route: 'ProfileSetting',
  },
  {
    name: 'Notifikasi',
    icon: 'notifications-none',
    icontype: 'MaterialIcons',
    color: '#AC4DFE',
    route: 'SubscriptionDetails',
  },
  {
    name: 'Bantuan',
    icon: 'help-circle',
    icontype: 'Feather',
    color: '#1FB8FC',
    route: 'SubscriptionDetails',
  },
  {
    name: 'Berikan Feedback',
    icon: 'notification',
    icontype: 'AntDesign',
    color: '#EA307D',
    route: 'SubscriptionDetails',
  },
  {
    name: 'Keluar',
    icon: 'log-out',
    icontype: 'Feather',
    color: '#F9B403',
    route: 'SubscriptionDetails',
  },
];

const Item = props => {
  return (
    <TouchableOpacity style={styles.fitursection} onPress={props.onPress}>
      <Icon
        name={props.icon}
        type={props.icontype}
        style={styles.iconfitur(props.color)}
      />
      <Text style={styles.textfitur}>{props.name}</Text>
      <Icon name="chevron-right" type="Feather" style={styles.chevronright} />
    </TouchableOpacity>
  );
};

const Profile = ({navigation}) => {
  const {userData, handleUserLogout} = useProfile(navigation);
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header lgTitle="Akun Saya" />
      <View style={styles.container}>
        <View style={styles.profilesection}>
          <View style={styles.textprofile}>
            <Text style={styles.textname}>{userData.full_name}</Text>
            <Text style={styles.textowner}>
              {userData.role === 'owner' ? 'Pemilik' : 'Penyewa'}
            </Text>
          </View>
          <Image
            source={
              userData.avatar
                ? {uri: userData.avatar}
                : require('assets/images/User.png')
            }
            style={styles.imgprofile}
          />
        </View>
        <TouchableOpacity style={styles.premiummember}>
          <Image
            source={require('../../../assets/images/best-seller.png')}
            style={styles.imgpremiummember}
          />
          <Text style={styles.textpremiummember}>Premium Member</Text>
          <Icon
            name="chevron-right"
            type="Feather"
            style={styles.chevronright}
          />
        </TouchableOpacity>
        <View style={styles.settingsection}>
          <Text style={styles.textsettings}>Pengaturan</Text>
          <FlatList
            data={DATA}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Item
                icon={item.icon}
                icontype={item.icontype}
                name={item.name}
                color={item.color}
                onPress={() => {
                  item.name === 'Keluar'
                    ? handleUserLogout()
                    : navigation.navigate(item.route);
                }}
              />
            )}
          />
        </View>
      </View>
    </Container>
  );
};

export default Profile;
