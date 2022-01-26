import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Icon, Container, Button, Input} from 'components';
import styles from './styles';
import useRegister from './useRegister';

const Register = ({navigation}) => {
  const {credentials, setCredentials, error, loading, handleUserRegister} =
    useRegister();

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
            <Input
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap"
              onChangeText={val =>
                setCredentials({...credentials, full_name: val})
              }
              value={credentials.full_name}
              error={error?.full_name}
            />
            <Input
              label="Email atau No.Telepon"
              placeholder="08xxxxxxx"
              onChangeText={val => setCredentials({...credentials, phone: val})}
              value={credentials.phone}
              error={error?.phone}
            />
            <Input
              label="Password"
              placeholder="*******"
              secureTextEntry={true}
              onChangeText={val =>
                setCredentials({...credentials, password: val})
              }
              value={credentials.password}
              error={error?.password}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonSection}>
        <Button
          title="Daftar Sekarang"
          loading={loading}
          onPress={() => handleUserRegister()}
          style={styles.button}
        />
      </View>
    </Container>
  );
};

export default Register;
