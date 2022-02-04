import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {
  Container,
  Header,
  PropertyCard,
  Icon,
  ModalWarning,
  SearchBox,
} from 'components';
import ActionButton from 'react-native-action-button';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'styles';
import styles from './styles';
import useProperty from './useProperty';

const FILTERS = ['Apartemen', 'Hotel', 'Kost'];

const Property = ({navigation}) => {
  const {selected, setSelected, property} = useProperty(navigation);
  console.log(property);
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header smTitle="Daftar Properti" navigation={navigation} />
      <View style={styles.container}>
        <SearchBox />
        <View style={styles.filterSection}>
          {FILTERS.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelected(item)}>
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
                locations={[0, 0.5, 0.6]}
                colors={
                  selected === item
                    ? [
                        'rgba(68, 170, 251, 0.7)',
                        'rgba(68, 170, 251, 1)',
                        '#44AAFB',
                      ]
                    : [
                        'rgba(68, 170, 251, 0)',
                        'rgba(68, 170, 251, 0)',
                        'rgba(68, 170, 251, 0)',
                      ]
                }
                style={styles.filterItem(selected === item)}>
                <Text style={styles.filterItemTitle(selected === item)}>
                  {item}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={property}
          keyExtractor={(item, index) => index.toString}
          renderItem={({item}) => (
            <PropertyCard
              images={item.images}
              rating={item.rating}
              name={item.name}
              rental_costs={item.rental_costs}
              rental_type={item.rental_type}
              rented={item.rented}
              empty={item.empty}
            />
          )}
        />
      </View>
      <ActionButton hideShadow={true} buttonColor={Colors.PRIMARY}>
        <ActionButton.Item
          hideLabelShadow={false}
          buttonColor="#FC6A23"
          title="Apartemen"
          onPress={() => navigation.navigate('NewProperty')}>
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
          onPress={() => navigation.navigate('NewProperty')}>
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
          onPress={() => navigation.navigate('NewProperty')}>
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
