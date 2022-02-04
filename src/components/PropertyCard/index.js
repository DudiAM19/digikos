import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const PropertyCard = ({property}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: property.images,
        }}
        style={styles.image}
      />
      <View style={styles.body}>
        <View style={styles.ratingSection}>
          <Icon name="star" type="FontAwesome" style={styles.ratingIcon} />
          <Text style={styles.ratingValue}>{property.rating}</Text>
        </View>
        <Text style={styles.propertyName}>{property.name}</Text>
        <Text style={styles.propertyPrice}>{property.rental_costs}</Text>
        <Text style={styles.propertyPriceLable}>
          Harga Sewa / {property.rental_type}
        </Text>
        <View style={styles.propertyInfo}>
          <Text style={styles.propertyInfoText(Colors.ORANGE)}>
            {property.rented} Tersewa
          </Text>
          <Text style={styles.propertyInfoDot}>•</Text>
          <Text style={styles.propertyInfoText(Colors.GREEN)}>
            {property.empty} Tersedia
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
