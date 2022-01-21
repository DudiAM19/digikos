import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Container, Header} from 'components';
import styles from './styles';

const DATA = [
  {
    img: require('../../../../../assets/images/profile.png'),
    name: 'a.n Andi Firwansyah',
    price: '2.500.000',
    progres: 'Proses',
    date: '10 Januari 2022',
  },
  {
    img: require('../../../../../assets/images/profile.png'),
    name: 'a.n Andi Firwansyah',
    price: '2.500.000',
    progres: 'Lunas',
    date: '10 Oktober 2022',
  },
  {
    img: require('../../../../../assets/images/profile.png'),
    name: 'a.n Andi Firwansyah',
    price: '2.500.000',
    progres: 'Ditolak',
    date: '10 Oktober 2022',
  },
];

const Item = props => {
  return (
    <TouchableOpacity style={styles.paymentinfosection} onPress={props.onPress}>
      <Image source={props.img} style={styles.img} />
      <View style={styles.namesection}>
        <Text style={styles.textname}>{props.name}</Text>
        <Text style={styles.textprice}>RP {props.price}</Text>
      </View>
      <View style={styles.infosection}>
        <View
          style={
            props.progres === 'Proses'
              ? styles.progresproses
              : props.progres === 'Lunas'
              ? styles.progreslunas
              : styles.progresditolak
          }>
          <Text
            style={
              props.progres === 'Proses'
                ? styles.textprogresproses
                : props.progres === 'Lunas'
                ? styles.textprogreslunas
                : styles.textprogresditolak
            }>
            {props.progres}
          </Text>
        </View>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const BillPayment = ({navigation}) => {
  return (
    <Container backgroundColor="white">
      <Header smTitle="Pembayaran Tagihan" />
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Item
              img={item.img}
              name={item.name}
              price={item.price}
              progres={item.progres}
              date={item.date}
              onPress={() => navigation.navigate('DetailBillPayment')}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default BillPayment;
