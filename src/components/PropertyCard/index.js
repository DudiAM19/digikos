import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'components';
import styles from './styles';

const PropertyCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg',
        }}
        style={styles.image}
      />
      <View style={styles.body}>
        <View style={styles.section}>
          <Icon
            name="apartment"
            type="MaterialIcons"
            style={styles.propertyIcon}
          />
          <Text style={styles.propertyName}>Anindita Timur Selatan</Text>
        </View>
        <Text style={styles.propertyRoomTotal}>40 Kamar</Text>
        <View style={styles.section}>
          <Text style={styles.indicatorEmpty}>5 Tersedia</Text>
          <Text style={styles.separatorPipe}>|</Text>
          <Text style={styles.indicatorFilled}>10 Tersewa</Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyCard;
