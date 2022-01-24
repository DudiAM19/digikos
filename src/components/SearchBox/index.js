import React from 'react';
import {View, TextInput} from 'react-native';
import {Icon} from 'components';
import styles from './styles';

const SearchBox = () => (
  <View style={styles.container}>
    <Icon name="search1" type="AntDesign" style={styles.icon} />
    <TextInput placeholder="Cari properti disini" style={styles.input} />
  </View>
);

export default SearchBox;
