import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const PropertyCard = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.images,
        }}
        style={styles.image}
      />
      <View style={styles.body}>
        <View style={styles.ratingSection}>
          <Icon name="star" type="FontAwesome" style={styles.ratingIcon} />
          <Text style={styles.ratingValue}>{props.rating}</Text>
        </View>
        <Text style={styles.propertyName}>{props.name}</Text>
        <Text style={styles.propertyPrice}>{props.rental_costs}</Text>
        <Text style={styles.propertyPriceLable}>
          Harga Sewa / {props.rental_type}
        </Text>
        <View style={styles.propertyInfo}>
          <Text style={styles.propertyInfoText(Colors.ORANGE)}>
            {props.rented} Tersewa
          </Text>
          <Text style={styles.propertyInfoDot}>•</Text>
          <Text style={styles.propertyInfoText(Colors.GREEN)}>
            {props.empty} Tersedia
          </Text>
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
