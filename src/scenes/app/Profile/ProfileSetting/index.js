import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Icon, Input, InputSelect} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import {gender} from 'constants';

const ProfileSetting = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header
        smTitle="Pengaturan Akun"
        navigation={navigation}
        btnSave={() => alert('ok')}
      />
      <View style={styles.container}>
        <Text style={styles.sectionLable}>Foto profil</Text>
        <View style={styles.avatarSection}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.avatarCameraSection}>
            <Icon
              name="camera"
              type="Feather"
              style={styles.avatarCameraIcon}
            />
          </TouchableOpacity>
          <Text style={styles.avatarSectionLable}>
            Upload foto profil kamu. {'\n'}
            Hanya penyewa properti kamu yang bisa lihat
          </Text>
        </View>
        <View style={styles.inputSection}>
          <Input label="Nama Lengkap" placeholder="Nama lengkap kamu" />
          <Input label="Email" placeholder="Email kamu jika ada" />
          <Input label="No.Telepon" placeholder="No.Telepon kamu" />
          <InputSelect
            label="Jenis Kelamin"
            placeholder="Pilih jenis kelamin"
            data={gender}
          />
          <InputSelect
            label="Provinsi"
            placeholder="Pilih provinsi"
            data={gender}
          />
          <InputSelect label="Kota" placeholder="Pilih kota" data={gender} />
          <InputSelect
            label="Kecamatan"
            placeholder="Pilih kecamatan"
            data={gender}
          />
        </View>
      </View>
    </Container>
  );
};

export default ProfileSetting;
