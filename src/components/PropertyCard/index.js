import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

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
        <View style={styles.ratingSection}>
          <Icon name="star" type="FontAwesome" style={styles.ratingIcon} />
          <Text style={styles.ratingValue}>4.0</Text>
        </View>
        <Text style={styles.propertyName}>Anindita Timur A2</Text>
        <Text style={styles.propertyPrice}>Rp 250.000</Text>
        <Text style={styles.propertyPriceLable}>Harga Sewa / Bulan</Text>
        <View style={styles.propertyInfo}>
          <Text style={styles.propertyInfoText(Colors.ORANGE)}>15 Tersewa</Text>
          <Text style={styles.propertyInfoDot}>•</Text>
          <Text style={styles.propertyInfoText(Colors.GREEN)}>5 Tersedia</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.optionButton}>
        <Icon
          name="dots-vertical"
          type="MaterialCommunityIcons"
          style={styles.optionButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PropertyCard;
