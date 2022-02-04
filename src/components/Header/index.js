import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const Header = props => {
  const {
    smTitle,
    onSearch,
    lgTitle,
    navigation,
    transparent,
    btnSave,
    btnSaveLoading,
  } = props;
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
            <Text numberOfLines={1} style={styles.smTitle}>
              {smTitle}
            </Text>
          </View>
        )}
        {lgTitle && (
          <View style={styles.bodyStart}>
            <Text numberOfLines={1} style={styles.lgTitle}>
              {lgTitle}
            </Text>
          </View>
        )}
        <View style={styles.rightButton}>
          {onSearch && (
            <TouchableOpacity onPress={onSearch}>
              <Icon
                name="search1"
                type="AntDesign"
                style={styles.rightButtonIcon}
              />
            </TouchableOpacity>
          )}
          {btnSave && (
            <TouchableOpacity onPress={btnSave} style={styles.buttonSave}>
              {btnSaveLoading ? (
                <ActivityIndicator size="small" color={Colors.DRAKER_BLACK} />
              ) : (
                <Text style={styles.buttonSaveTitle}>Simpan</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

Header.defaultProps = {
  smTitle: undefined,
  lgTitle: undefined,
  onSearch: undefined,
  transparent: false,
  btnSave: undefined,
  btnSaveLoading: false,
};

export default Header;
