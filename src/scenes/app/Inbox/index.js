import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header} from 'components';
import {Colors} from 'styles';

const Inbox = ({navigation}) => {
  return (
    <Container backroundColor={Colors.WHITE}>
      <Header lgTitle="Pesan" navigation={navigation} />
    </Container>
  );
};
export default Inbox;
