import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Icon, Container, Button, Input} from 'components';
import styles from './styles';

const Register = ({navigation}) => {
  return (
    <Container backgroundColor="white">
      <ScrollView>
        <View style={styles.contaner}>
          <View style={styles.headerSection}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header}>
              <Icon
                name="arrowleft"
                type="AntDesign"
                style={styles.arrowleft}
              />
            </TouchableOpacity>
            <Text style={styles.textwelcome}>Buat akun {'\n'}baru</Text>
            <View style={styles.slidersection}>
              <View style={styles.slider1} />
              <View style={styles.slider2} />
              <View style={styles.slider2} />
            </View>
          </View>
          <View style={styles.formSection}>
            <Input label="Nama Lengkap" placeholder="Masukkan nama lengkap" />
            <Input
              label="Email atau No.Telepon"
              placeholder="example@mail.com"
            />
            <Input label="Password" placeholder="*******" />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonSection}>
        <Button title="Daftar Sekarang" style={styles.button} />
      </View>
    </Container>
  );
};

export default Register;
