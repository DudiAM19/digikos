import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Container, Header, Icon, Input, InputSelect} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useProfileSetting from './useProfileSetting';

const ProfileSetting = ({navigation}) => {
  const {
    loading,
    data,
    setData,
    owner,
    provinces,
    city,
    district,
    setProvinces,
    setCity,
    setDistrict,
    genders,
    setGenders,
    handleChooseAvatar,
    handleUpdateProfile,
  } = useProfileSetting(navigation);
  return (
    <Container backgroundColor={Colors.WHITE}>
      <Header
        smTitle="Pengaturan Akun"
        navigation={navigation}
        btnSaveLoading={loading}
        btnSave={() => handleUpdateProfile()}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.sectionLable}>Foto profil</Text>
          <View style={styles.avatarSection}>
            <TouchableOpacity
              onPress={() => handleChooseAvatar()}
              activeOpacity={0.5}>
              {data.avatar?.uri ? (
                <Image source={{uri: data.avatar.uri}} style={styles.avatar} />
              ) : data.avatar ? (
                <Image source={{uri: data.avatar}} style={styles.avatar} />
              ) : (
                <View style={styles.avatarCameraSection}>
                  <Icon
                    name="camera"
                    type="Feather"
                    style={styles.avatarCameraIcon}
                  />
                </View>
              )}
            </TouchableOpacity>
            <Text style={styles.avatarSectionLable}>
              Upload foto profil kamu. {'\n'}
              Hanya penyewa properti kamu yang bisa lihat
            </Text>
          </View>
          <View style={styles.inputSection}>
            <Input
              label="Nama Lengkap"
              placeholder="Nama lengkap kamu"
              value={data.full_name}
              onChangeText={val => setData({...data, full_name: val})}
            />
            <Input
              label="Email"
              placeholder="Email kamu jika ada"
              value={data.email}
              onChangeText={val => setData({...data, email: val})}
            />
            <Input
              label="No.Telepon"
              placeholder="No.Telepon kamu"
              editable={false}
              value={data.phone}
            />
            <InputSelect
              label="Jenis Kelamin"
              placeholder="Pilih jenis kelamin"
              data={genders.data}
              disabled={false}
              selected={genders.selected}
              onChangeData={val => {
                setGenders({...genders, selected: val});
              }}
            />
            <InputSelect
              label="Provinsi"
              placeholder="Pilih provinsi"
              disabled={false}
              data={provinces.data}
              selected={provinces.selected}
              onChangeData={val => {
                setProvinces({...provinces, selected: val});
                setCity({...city, selected: null});
                setDistrict({...district, selected: null});
              }}
            />
            <InputSelect
              label="Kota"
              placeholder="Pilih kota"
              disabled={!provinces.selected?.id}
              data={city.data}
              selected={city.selected}
              onChangeData={val => {
                setCity({...city, selected: val});
                setDistrict({...district, selected: null});
              }}
            />
            <InputSelect
              label="Kecamatan"
              placeholder="Pilih kecamatan"
              disabled={!city.selected?.id}
              data={district.data}
              selected={district.selected}
              onChangeData={val => setDistrict({...district, selected: val})}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ProfileSetting;
