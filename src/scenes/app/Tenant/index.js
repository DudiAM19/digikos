import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Container, Header, Button} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useTenant from './useTenant';

const DATA = [
  {
    name: 'Tenant 1',
    avatar:
      'https://sales.kencanaindonesia.co.id/wp-content/uploads/2021/04/placeholder-3.png',
    phone: '',
    email: '',
    room_code: 'ANDT1',
    province: 'DI YOGYAKARTA',
    city: 'YOGYAKARTA',
    district: 'SLEMAN',
    gender: 'L',
    room: {
      id: 1,
      property_id: 1,
      name: 'Kamar A1',
      description: null,
      number: 'AN1',
      status: 0,
      created_at: '2022-01-17T23:41:22.000000Z',
      updated_at: '2022-01-17T23:41:24.000000Z',
      code: 'ANDT1',
    },
    detail_property: {
      id: 1,
      owner_id: 1,
      name: 'Anindita Timur #1',
      images:
        '["https://i.pinimg.com/736x/af/17/a3/af17a38d8a9f51cb4bbabaf8c49dc67d--mobile-design-app-design.jpg", "https://items.epicpxls.com/uploads/photo/a252471cb62d1b9042b41a41c468b247.png"]',
      type: 'apartemen',
      province: 'Daerah Istimewa Yogyakarta DKI',
      city: 'Yogyakarta',
      district: 'Sleman',
      detail_address: 'Jl. Jembatan merah v no 96B',
      unit_number: '96B',
      facility: '[1,2,4,5]',
      rental_type: 'yearly',
      rental_costs: 4200000,
      created_at: '2022-01-17T23:34:43.000000Z',
      updated_at: '2022-01-17T23:34:45.000000Z',
      rating: '0',
    },
    rent_at: '2022-01-24 22:35:30',
    expired_at: '2022-02-24 22:35:33',
  },
];

const Tenant = ({navigation}) => {
  const {loading, tenants} = useTenant(navigation);
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header
        lgTitle={'Penyewa ' + tenants.length}
        onSearch={() => navigation.navigate('SearchTenant', {data: DATA})}
      />
      {loading ? (
        <ActivityIndicator size="small" color={Colors.PRIMARY} />
      ) : tenants.length > 0 ? (
        <FlatList
          data={tenants}
          contentContainerStyle={styles.listSection}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TenantItem
              tenant={item}
              onPress={() => navigation.navigate('DetailTenant')}
            />
          )}
        />
      ) : (
        <View style={styles.noDataSection}>
          <Image
            source={require('assets/images/no_item.gif')}
            style={styles.noItemGif}
          />
          <Text style={styles.noItemLable}>
            Kamu belum memiliki penyewa. {'\n'} Tambah penyewa atau property
            kamu disini
          </Text>
          <Button
            small
            title="Daftar Properti"
            onPress={() => navigation.navigate('Property')}
          />
        </View>
      )}
    </Container>
  );
};

const TenantItem = ({tenant, onPress}) => {
  return (
    <View style={styles.tenantSection}>
      <Image source={{uri: tenant.avatar}} style={styles.avatar} />
      <View style={styles.tenantInfoSection}>
        <TouchableOpacity activeOpacity={0.5} style={styles.body}>
          <Text style={styles.tenantName}>{tenant.name}</Text>
          <Text style={styles.tenantInfoRoom}>
            {tenant.detail_property.name + ' - ' + tenant.room.name}
          </Text>
        </TouchableOpacity>
        <View style={styles.connectSection}>
          <TouchableOpacity>
            <Image
              source={require('assets/images/telephone.png')}
              style={styles.connectIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('assets/images/whatsapp.png')}
              style={[styles.connectIcon, styles.ml20]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tenant;
