import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header} from 'components';
import styles from './styles';

const DetailBillPayment = () => {
  return (
    <Container backgroundColor="transparent">
      <Header smTitle="Detail Pembayaran" transparent={true} />
      <View style={styles.container}>
        <View style={styles.invoice}>
          <View style={styles.invoicedate}>
            <Text style={styles.noinvoice}>NO : TX002</Text>
            <Text style={styles.date}>10 Januari 2022</Text>
          </View>
          <View style={styles.detailinvoice}>
            
          </View>
        </View>
      </View>
    </Container>
  );
};

export default DetailBillPayment;
