import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Header} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import NeedApprovel from './NeedApproval';
import Notification from './Notification';

const Inbox = ({navigation}) => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <Container backroundColor={Colors.WHITE}>
      <Header lgTitle="Pesan" navigation={navigation} />
      <View style={styles.tabheader}>
        <View style={styles.tabcontainer(tabActive === 0)}>
          <TouchableOpacity onPress={() => setTabActive(0)}>
            <Text style={styles.tabtitle(tabActive === 0)}>Notifikasi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabcontainer(tabActive === 1)}>
          <TouchableOpacity onPress={() => setTabActive(1)}>
            <Text style={styles.tabtitle(tabActive === 1)}>
              Perlu Persetujuan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {tabActive === 0 ? (
        <Notification />
      ) : (
        <NeedApprovel navigation={navigation} />
      )}
    </Container>
  );
};
export default Inbox;
