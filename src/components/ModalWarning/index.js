import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Button} from 'components';
import styles from './styles';

const ModalWarning = props => (
  <Modal isVisible={props.visible} style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onClose}
      style={styles.closeButton}>
      <Icon name="close" type="AntDesign" style={styles.closeButtonIcon} />
    </TouchableOpacity>
    <View style={styles.body}>
      <Image
        resizeMode="contain"
        source={require('assets/images/undraw_Outer_space_re_u9vd.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.message}>{props.message}</Text>
      <Button
        title="Mulai Berlangganan"
        onPress={props.onPress}
        style={styles.button}
      />
    </View>
  </Modal>
);

export default ModalWarning;
