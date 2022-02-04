import React from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from 'components';
import styles from './styles';

const NotFoundCard = props => {
  return (
    <View style={styles.noDataSection}>
      <Image
        source={require('assets/images/no_item.gif')}
        style={styles.noItemGif}
      />
      <Text style={styles.noItemLable}>{props.text}</Text>
      <Button small title="Daftar Properti" onPress={props.onPress} />
    </View>
  );
};

export default NotFoundCard;
