import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const DATA = [
  {
    icon: 'md-card-outline',
    textapproveltype: 'Pembayaran Tagihan',
    icontype: 'Ionicons',
    color: Colors.ORANGE,
    route: 'BillPayment',
  },
  {
    icon: 'checkbox-marked-circle-outline',
    textapproveltype: 'Oper Penyewa',
    icontype: 'MaterialCommunityIcons',
    color: '#AC4DFE',
    route: 'TenantOperation',
  },
  {
    icon: 'tool',
    textapproveltype: 'Kerusakan',
    icontype: 'Feather',
    color: '#EA307D',
    route: 'Failure',
  },
  {
    icon: 'md-snow-sharp',
    textapproveltype: 'Keluhan Penyewa',
    icontype: 'Ionicons',
    color: '#1FB8FC',
    route: 'TenantComplaint',
  },
];

const Item = props => {
  return (
    <TouchableOpacity style={styles.approvelsection} onPress={props.onPress}>
      <Icon
        name={props.icon}
        type={props.icontype}
        style={styles.icon(props.color)}
      />
      <View>
        <View style={styles.textsection}>
          <Text style={styles.textapproveltype}>{props.textapproveltype}</Text>
          <Icon
            name="chevron-forward"
            type="Ionicons"
            style={styles.forwardicon}
          />
        </View>
        <View style={styles.border} />
      </View>
    </TouchableOpacity>
  );
};

const NeedApprovel = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {DATA.map((item, index) => (
          <Item
            key={index}
            icon={item.icon}
            textapproveltype={item.textapproveltype}
            icontype={item.icontype}
            color={item.color}
            onPress={() => navigation.navigate(item.route)}
          />
        ))}
      </View>
    </View>
  );
};

export default NeedApprovel;
