import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {Container, Header, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const DATA = [
  {
    img: require('../../../assets/images/profile.png'),
    name: 'Andi Firwansyah',
    room: 'Anindita Timur - Kamar 2A',
  },
  {
    img: require('../../../assets/images/5eb13bfdb4659efea4f8dace_profile-dummy.png'),
    name: 'Dudi Ali Murtado',
    room: 'Anindita Timur - Kamar 12C',
  },
  {
    img: require('../../../assets/images/profile.png'),
    name: 'Andi Firwansyah',
    room: 'Anindita Timur - Kamar 2A',
  },
  {
    img: require('../../../assets/images/5eb13bfdb4659efea4f8dace_profile-dummy.png'),
    name: 'Dudi Ali Murtado',
    room: 'Anindita Timur - Kamar 12C',
  },
];

const Item = props => {
  return (
    <View>
      <View style={styles.tenantsection}>
        <Image source={props.img} style={styles.imgprofile} />
        <View style={styles.textsection}>
          <Text style={styles.textname}>{props.name}</Text>
          <Text style={styles.textroom}>{props.room}</Text>
        </View>
        <View style={styles.iconsection}>
          <TouchableOpacity>
            <Icon name="call-outline" type="Ionicons" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-whatsapp" type="Ionicons" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

const Tenant = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header
        lgTitle="Penyewa"
        onSearch={() => navigation.navigate('SearchTenant')}
        navigation={navigation}
      />
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Item img={item.img} name={item.name} room={item.room} />
        )}
      />
    </Container>
  );
};
export default Tenant;
