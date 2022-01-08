import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';

const DATA = [
  {
    img: require('../../../../assets/images/5eb13bfdb4659efea4f8dace_profile-dummy.png'),
    name: 'Dudi Ali Murtado',
    message: 'Jangan berisik woeh, mau tidur nih',
  },
  {
    img: require('../../../../assets/images/profile.png'),
    name: 'Andi Firwansyah',
    message: 'Siapa yang ngerusak kran air? ngaku woeh',
  },
];

const Item = props => {
  return (
    <View style={styles.notifsection}>
      <Image source={props.img} style={styles.img} />
      <View style={styles.textsection}>
        <Text style={styles.textname}>{props.name}</Text>
        <Text style={styles.textmessage}>{props.message}</Text>
        <View style={styles.border} />
      </View>
    </View>
  );
};

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Item img={item.img} name={item.name} message={item.message} />
          )}
        />
      </View>
    </View>
  );
};

export default Notification;
