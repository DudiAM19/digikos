import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Container, Header, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const DetailTenant = ({navigation}) => {
  return (
    <Container barColor="transparent">
      <Header
        smTitle="Detail Penyewa"
        transparent={true}
        navigation={navigation}
      />
      <View style={styles.tenantsection}>
        <View>
          <Image
            source={require('../../../../assets/images/profile.png')}
            style={styles.imgprofile}
          />
        </View>
        <View style={styles.textsection}>
          <Text style={styles.textname}>Andi Firwansyah</Text>
          <Text style={styles.textroom}>Anindita Timur - Kamar 2A</Text>
        </View>
        <View style={styles.iconsection}>
          <TouchableOpacity style={styles.btn}>
            <Icon name="call-outline" type="Ionicons" style={styles.iconcall} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon
              name="logo-whatsapp"
              type="Ionicons"
              style={styles.iconwhatsapp}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contacttenant}>
          <View style={styles.datasection}>
            <Text style={styles.text1}>Email</Text>
            <Text style={styles.text2}>andifirwansyah@gmail.com</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.datasection}>
            <Text style={styles.text1}>No.Telepon</Text>
            <Text style={styles.text2}>089674462657</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.datasection}>
            <Text style={styles.text1}>Apartemen</Text>
            <Text style={styles.text2}>Anindita Timur A</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.datasection}>
            <Text style={styles.text1}>Tipe Sewa</Text>
            <Text style={styles.text2}>Bulanan</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.datasection}>
            <Text style={styles.text1}>Tanggal Sewa</Text>
            <Text style={styles.text2}>12 December 2021</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.datasection}>
            <Text style={styles.text1}>Tanggal Berakhir</Text>
            <Text style={styles.text2}>25 January 2021</Text>
          </View>
          <View style={styles.border} />
        </View>
      </View>
    </Container>
  );
};

export default DetailTenant;
