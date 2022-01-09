import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';

const Header = props => {
  const {smTitle, onSearch, lgTitle, navigation, transparent} = props;
  return (
    <View style={styles.container(transparent)}>
      <View style={styles.section}>
        {smTitle && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.leftButton}>
            <Icon
              name="arrowleft"
              type="AntDesign"
              style={styles.leftButtonIcon}
            />
          </TouchableOpacity>
        )}
        {smTitle && (
          <View style={styles.bodyCenter}>
            <Text style={styles.smTitle}>{smTitle}</Text>
          </View>
        )}
        {lgTitle && (
          <View style={styles.bodyStart}>
            <Text style={styles.lgTitle}>{lgTitle}</Text>
          </View>
        )}
        <TouchableOpacity
          disabled={onSearch ? false : true}
          onPress={onSearch}
          style={styles.rightButton}>
          {onSearch && (
            <Icon
              name="search1"
              type="AntDesign"
              style={styles.rightButtonIcon}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

Header.defaultProps = {
  smTitle: undefined,
  lgTitle: undefined,
  onSearch: undefined,
  transparent: false,
};

export default Header;
