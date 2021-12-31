import React, {useState} from 'react';
import {Container, Icon, Button} from 'components';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './styles';

const CHOOSE_ROLE = [
  {
    label: 'Pemilik',
    image: require('assets/images/man-1.png'),
  },
  {
    label: 'Pemilik',
    image: require('assets/images/adults-1.png'),
  },
];

const ChooseRole = ({navigation}) => {
  const [selected, setSelected] = useState(null);
  return (
    <Container backgroundColor="white">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.header}>
            <Icon name="arrowleft" type="AntDesign" style={styles.arrowleft} />
          </TouchableOpacity>
          <View style={styles.topSection}>
            <Text style={styles.topTitle}>Saya ingin masuk sebagai</Text>
            <View style={styles.slideSection}>
              <View style={styles.slide} />
              <View style={styles.slideFull} />
              <View style={styles.slide} />
            </View>
          </View>
          <View style={styles.roleSection}>
            {CHOOSE_ROLE.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.role(selected === index)}
                onPress={() => setSelected(index)}
                key={index}>
                <Image source={item.image} style={styles.roleImage} />
                <Text style={styles.roleLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonSection}>
        <Button title="Konfirmasi" style={styles.button} />
      </View>
    </Container>
  );
};

export default ChooseRole;
