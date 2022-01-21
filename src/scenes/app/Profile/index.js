import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Container, Header, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const DATA = [
  {
    text: 'Pengaturan Akun',
    icon: 'settings-outline',
    icontype: 'Ionicons',
    color: Colors.ORANGE,
  },
  {
    text: 'Notifikasi',
    icon: 'notifications-none',
    icontype: 'MaterialIcons',
    color: '#AC4DFE',
  },
  {
    text: 'Bantuan',
    icon: 'help-circle',
    icontype: 'Feather',
    color: '#1FB8FC',
  },
  {
    text: 'Berikan Feedback',
    icon: 'notification',
    icontype: 'AntDesign',
    color: '#EA307D',
  },
  {
    text: 'Keluar',
    icon: 'log-out',
    icontype: 'Feather',
    color: '#F9B403',
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
      <Text style={styles.textfitur}>{props.text}</Text>
      <Icon name="chevron-right" type="Feather" style={styles.chevronright} />
    </TouchableOpacity>
  );
};

const Profile = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header lgTitle="Akun Saya" />
      <View style={styles.container}>
        <View style={styles.profilesection}>
          <View style={styles.textprofile}>
            <Text style={styles.textname}>Yudi Wahyudi</Text>
            <Text style={styles.textowner}>Pemilik</Text>
          </View>
          <Image
            source={require('../../../assets/images/User.png')}
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
                text={item.text}
                color={item.color}
                onPress={() => navigation.navigate('SubscriptionDetails')}
              />
            )}
          />
        </View>
      </View>
    </Container>
  );
};

export default Profile;
