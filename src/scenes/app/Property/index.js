import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header, PropertyCard, Icon, ModalWarning} from 'components';
import ActionButton from 'react-native-action-button';
import {Colors} from 'styles';
import styles from './styles';

const Property = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header smTitle="Daftar Properti" navigation={navigation} />
      <View style={styles.container}>
        <PropertyCard />
      </View>
      <ActionButton hideShadow={true} buttonColor={Colors.PRIMARY}>
        <ActionButton.Item
          hideLabelShadow={false}
          buttonColor="#FC6A23"
          title="Apartemen"
          onPress={() => console.log('notes tapped!')}>
          <Icon
            name="apartment"
            type="MaterialIcons"
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
        <ActionButton.Item
          hideLabelShadow={false}
          buttonColor="#AC4DFE"
          title="Hotel"
          onPress={() => {}}>
          <Icon
            name="office-building"
            type="MaterialCommunityIcons"
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
        <ActionButton.Item
          hideLabelShadow={false}
          buttonColor="#EA307D"
          title="Kost"
          onPress={() => {}}>
          <Icon
            name="warehouse"
            type="MaterialCommunityIcons"
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
      </ActionButton>
      <ModalWarning
        visible={false}
        title={'Oops!'}
        message={'Kamu harus berlangganan dulu \nuntuk menambah apartemen baru'}
        onClose={() => {}}
        onPress={() => {}}
      />
    </Container>
  );
};
export default Property;
