import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon, Container, Button} from 'components';
import styles from './styles';

const Login = ({navigation}) => {
  return (
    <Container backgroundColor="white">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.header}>
        <Icon name="arrowleft" type="AntDesign" style={styles.arrowleft} />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.textwelcome}>Selamat datang kembali</Text>
        <View style={styles.slidersection}>
          <View style={styles.slider1} />
          <View style={styles.slider2} />
          <View style={styles.slider3} />
        </View>
        <View style={styles.formsection}>
          <Text style={styles.textform}>Email atau Kode Apartemen</Text>
          <View style={styles.inputsection}>
            <TextInput placeholder="example@mail.com" style={styles.input} />
          </View>
          <Text style={styles.textform}>Password</Text>
          <View style={styles.inputsection}>
            <TextInput
              autoComplete="password"
              secureTextEntry={true}
              style={styles.input}
              placeholder="********"
            />
          </View>
        </View>
        <View style={styles.btnsection}>
          <Button title="Sign In" />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;
