import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Container, Button} from 'components';

const OnBoarding = ({navigation}) => {
  return (
    <Container backgroundColor="white">
      <View style={styles.body}>
        <Text style={styles.textwelcome}>Selamat Datang</Text>
        <Text style={styles.textsign}>Masuk atau buat akun baru</Text>
        <Image
          style={styles.img}
          source={require('assets/images/rocket.png')}
        />
        <Button title="Masuk" onPress={() => navigation.navigate('Login')} />
        <TouchableOpacity
          style={styles.btnsignup}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textbtnnoaccount}>Belum punya akun?</Text>
          <Text style={styles.textbtnsingup}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default OnBoarding;
