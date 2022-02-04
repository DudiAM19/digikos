import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Icon, Button} from 'components';
import Modal from 'react-native-modal';
import styles from './styles';

const InputSelect = props => {
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleCloseModal = () => {
    setModalShow(false);
    setSelected(null);
  };

  const handleSelectItem = item => {
    setSelected(item.name);
    props.onChangeData(item);
  };

  return (
    <View>
      <View style={styles.inputItem}>
        <Text style={styles.inputLabel}>{props.label}</Text>
        <TouchableOpacity
          disabled={props.disabled}
          onPress={() => setModalShow(true)}
          style={styles.inputSection}>
          {props.selected ? (
            <Text style={styles.inputValue}>{props.selected.name}</Text>
          ) : (
            <Text style={styles.inputPlaceholder}>{props.placeholder}</Text>
          )}
          <Icon name="chevron-down" type="Feather" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      {props.error && <Text style={styles.error}>{props.error}</Text>}
      <Modal
        isVisible={modalShow}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        hideModalContentWhileAnimating={true}
        style={styles.modalContainer}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => handleCloseModal()}>
            <Icon
              name="close"
              type="AntDesign"
              style={styles.closeModalButtonIcon}
            />
          </TouchableOpacity>
          <View style={styles.modalTitleSection}>
            <Text style={styles.modalTitle}>{props.placeholder}</Text>
            <Text style={styles.modalSubTitle}>
              Kamu hanya bisa memilih salah satu
            </Text>
          </View>
          <FlatList
            data={props.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => handleSelectItem(item)}
                style={styles.modalItemSection}>
                <Text style={styles.modalItemTitle}>{item.name}</Text>
                {selected === item.name && (
                  <Icon
                    name="check"
                    type="Feather"
                    style={styles.modalItemCheckIcon}
                  />
                )}
              </TouchableOpacity>
            )}
          />
          <View>
            <Button small title="Simpan" onPress={() => setModalShow(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

InputSelect.defaultProps = {
  error: null,
  data: [],
  disabled: false,
  selected: null,
};

export default InputSelect;
