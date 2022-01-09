import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {Colors} from 'styles';

const Input = props => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.inputItem(focused)}>
      <Text style={styles.inputLabel}>{props.label}</Text>
      <TextInput
        style={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
        placeholderTextColor={Colors.GREY}
      />
    </View>
  );
};

export default Input;
