import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const Property = ({navigation}) => {
  return (
    <Container backroundColor={Colors.WHITE}>
      <Header smTitle="Daftar Properti" navigation={navigation} />
    </Container>
  );
};
export default Property;
