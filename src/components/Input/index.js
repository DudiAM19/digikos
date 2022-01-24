import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {Colors} from 'styles';

const Input = props => {
  const [focused, setFocused] = useState(false);
  return (
    <View>
      <View style={styles.inputItem(focused, props.error)}>
        <Text style={styles.inputLabel}>{props.label}</Text>
        <TextInput
          style={styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
          placeholderTextColor={props.error ? Colors.RED_HEAVY : Colors.GREY}
        />
      </View>
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

Input.defaultProps = {
  error: null,
};

export default Input;
