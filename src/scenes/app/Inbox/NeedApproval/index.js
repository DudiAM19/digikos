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
  },
  {
    icon: 'checkbox-marked-circle-outline',
    textapproveltype: 'Oper Penyewa',
    icontype: 'MaterialCommunityIcons',
    color: '#AC4DFE',
  },
  {
    icon: 'tool',
    textapproveltype: 'Kerusakan',
    icontype: 'Feather',
    color: '#EA307D',
  },
  {
    icon: 'md-snow-sharp',
    textapproveltype: 'Keluhan Penyewa',
    icontype: 'Ionicons',
    color: '#1FB8FC',
  },
];

const Item = props => {
  return (
    <View style={styles.approvelsection}>
      <Icon
        name={props.icon}
        type={props.icontype}
        style={styles.icon(props.color)}
      />
      <View>
        <TouchableOpacity style={styles.textsection}>
          <Text style={styles.textapproveltype}>{props.textapproveltype}</Text>
          <Icon
            name="chevron-forward"
            type="Ionicons"
            style={styles.forwardicon}
          />
        </TouchableOpacity>
        <View style={styles.border} />
      </View>
    </View>
  );
};

const NeedApprovel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Item
              icon={item.icon}
              textapproveltype={item.textapproveltype}
              icontype={item.icontype}
              color={item.color}
            />
          )}
        />
      </View>
    </View>
  );
};

export default NeedApprovel;
