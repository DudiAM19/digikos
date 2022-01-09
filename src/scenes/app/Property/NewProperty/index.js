import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Icon, Input} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const NewProperty = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header smTitle="Tambah Properti" navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.uploadImageSection}>
          <Text style={styles.uploadImageLabel}>Upload Gambar Properti</Text>
          <View style={styles.uploadSection}>
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadButton}>
              <Icon
                name="plus"
                type="AntDesign"
                style={styles.uploadButtonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadButton}>
              <Icon
                name="plus"
                type="AntDesign"
                style={styles.uploadButtonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.uploadButton}>
              <Icon
                name="plus"
                type="AntDesign"
                style={styles.uploadButtonIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.uploadNote}>* Maksimal ukuran gambar 2MB</Text>
        </View>
        <Input label="Nama Property" placeholder="Masukkan nama property" />
        <Input
          label="No. Apartemen atau Kos"
          placeholder="Masukkan No. Apartemen atau Kos"
        />
        <Input label="Harga Sewa" placeholder="Rp." keyboardType="numeric" />
        <Input label="Harga Sewa" placeholder="Rp." />
      </View>
    </Container>
  );
};

export default NewProperty;
