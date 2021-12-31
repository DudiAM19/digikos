import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {Colors} from 'styles';

const Input = props => (
  <View style={styles.inputItem}>
    <Text style={styles.inputLabel}>{props.label}</Text>
    <TextInput
      style={styles.input}
      {...props}
      placeholderTextColor={Colors.GREY}
    />
  </View>
);

export default Input;
