import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      disabled={props.disabled}
      onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
