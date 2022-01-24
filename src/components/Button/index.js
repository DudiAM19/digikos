import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import {Colors} from 'styles';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      disabled={props.disabled}
      onPress={props.onPress}>
      {props.loading ? (
        <ActivityIndicator size="small" color={Colors.WHITE} />
      ) : (
        <Text style={styles.title}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  loading: false,
};

export default Button;
