import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Icon, Container, Button, Input} from 'components';
import styles from './styles';
import useLogin from './useLogin';

const Login = ({navigation}) => {
  const {credentials, setCredentials, loading, handleUserLogin, error} =
    useLogin(navigation);
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
            <Text style={styles.textwelcome}>Selamat datang {'\n'}kembali</Text>
            <View style={styles.slidersection}>
              <View style={styles.slider1} />
              <View style={styles.slider2} />
              <View style={styles.slider2} />
            </View>
          </View>
          <View style={styles.formSection}>
            <Input
              label="No.Telepon atau Kode Kamar"
              placeholder="08xxxxxxx"
              error={error?.phone}
              onChangeText={val => setCredentials({...credentials, phone: val})}
              value={credentials.phone}
            />
            <Input
              label="Password"
              placeholder="*******"
              secureTextEntry={true}
              error={error?.password}
              onChangeText={val =>
                setCredentials({...credentials, password: val})
              }
              value={credentials.password}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonSection}>
        <Button
          title="Masuk"
          loading={loading}
          style={styles.button}
          onPress={() => handleUserLogin()}
        />
      </View>
    </Container>
  );
};

export default Login;
