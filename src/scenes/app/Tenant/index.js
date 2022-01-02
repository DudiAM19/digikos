import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header} from 'components';
import {Colors} from 'styles';

const Tenant = ({navigation}) => {
  return (
    <Container backroundColor={Colors.WHITE}>
      <Header
        lgTitle="Penyewa"
        onSearch={() => alert('Should be navigate to screen Search')}
        navigation={navigation}
      />
    </Container>
  );
};
export default Tenant;
