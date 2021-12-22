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
          source={require('../../../Assets/img/rocket.png')}
        />
        <Button
          title="Go to Sign In"
          onPress={() => navigation.navigate('login')}
        />
        <TouchableOpacity style={styles.btnsignup}>
          <Text style={styles.textbtnnoaccount}>No account yet?</Text>
          <Text style={styles.textbtnsingup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default OnBoarding;
