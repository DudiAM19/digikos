import React from 'react';
import {Container, Icon} from 'components';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ChooseRole = ({navigation}) => {
  return (
    <Container backgroundColor="white">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.header}>
        <Icon name="arrowleft" type="AntDesign" style={styles.arrowleft} />
      </TouchableOpacity>
    </Container>
  );
};

export default ChooseRole;
