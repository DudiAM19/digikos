import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {Container, Header, Icon} from 'components';
import styles from './styles';
import Modal from 'react-native-modal';
import {Colors} from 'styles';

const DetailBillPayment = ({navigation}) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <Container backgroundColor={Colors.BACKGROUND} barColor="transparent">
      <Header
        smTitle="Detail Pembayaran"
        transparent={true}
        navigation={navigation}
      />
      <View style={styles.container}>
        <View style={styles.invoice}>
          <View style={styles.invoicedate}>
            <Text style={styles.noinvoice}>NO : TX002</Text>
            <Text style={styles.date}>10 Januari 2022</Text>
          </View>
          <View style={styles.detailinvoice}>
            <View style={styles.waitinglabel}>
              <View style={styles.iconsection}>
                <Icon
                  name="clock-time-three-outline"
                  type="MaterialCommunityIcons"
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textwaiting}>Menunggu Konfirmasi</Text>
            </View>
            <Text style={styles.nameroom}>
              Perpanjangan kos Anindita Timur, Kamar A10
            </Text>
            <View style={styles.labelreceived}>
              <Text style={styles.textreceived}>TELAH DITERIMA DARI</Text>
              <Text style={styles.textnamereceived}>Andi Firwansyah</Text>
            </View>
            <View style={styles.labeltotal}>
              <Text style={styles.texttotal}>JUMLAH RP.</Text>
              <Text style={styles.totalnumber}>2.500.000</Text>
            </View>
            <Text style={styles.textfromrek}>DARI REKENING</Text>
            <View style={styles.accountsection}>
              <View style={styles.leftsection}>
                <Text style={styles.textaccount}>Bank</Text>
                <Text style={styles.textaccount}>Atas Nama</Text>
                <Text style={styles.textaccount}>Nomor Rekening</Text>
              </View>
              <View style={styles.rightsection}>
                <Text style={styles.textaccount}>Mandiri</Text>
                <Text style={styles.textaccount}>ANDI FIRWANSYAH</Text>
                <Text style={styles.textaccount}>xxxx95838390</Text>
              </View>
            </View>
          </View>
        </View>
        <Modal isVisible={modal}>
          <View style={styles.containermodal}>
            <View style={styles.contentmodal}>
              <Text style={styles.textmodal}>Alasan ditolak</Text>
              <View style={styles.inputsection}>
                <TextInput
                  placeholder="Tulis alasan kamu"
                  style={styles.inputmodal}
                />
              </View>
              <View style={styles.btnsection}>
                <TouchableOpacity style={styles.rejectbtnmodal}>
                  <Text style={styles.textrejectbtnmodal}>Tolak</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.receivedbtnmodal}
                  onPress={handleModal}>
                  <Text style={styles.textreceivedbtnmodal}>Konfirmasi</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.textproof}>BUKTI TRANSFER</Text>
        <View style={styles.proofsection}>
          <Image
            source={require('../../../../../../assets/images/proof.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.btnsection}>
          <TouchableOpacity style={styles.rejectbtn} onPress={handleModal}>
            <Text style={styles.textrejectbtn}>Tolak</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.receivedbtn}>
            <Text style={styles.textreceivedbtn}>Konfirmasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default DetailBillPayment;
