import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Container, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const Item = props => {
  return (
    <View>
      <View style={styles.tenantsection}>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={props.img} style={styles.imgprofile} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.textsection}>
          <Text style={styles.textname}>{props.name}</Text>
          <Text style={styles.textroom}>{props.room}</Text>
        </TouchableOpacity>
        <View style={styles.iconsection}>
          <TouchableOpacity>
            <Icon name="call-outline" type="Ionicons" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-whatsapp" type="Ionicons" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

const SearchTenant = ({route, navigation}) => {
  const [isFocused, setFocused] = useState(false);
  const {data} = route.params;

  const handleSearch = input => {};

  return (
    <Container backgroundColor={Colors.WHITE}>
      {/* {console.log(searchdata)} */}
      <View style={styles.container}>
        <View style={styles.inputsection}>
          <Icon
            name="search1"
            type="AntDesign"
            style={styles.iconsearch(isFocused)}
          />
          <TextInput
            placeholder="Cari Penyewa"
            placeholderTextColor={isFocused ? Colors.BLACK : Colors.LIGHT_TEXT}
            style={styles.input}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={input => {
              handleSearch(input);
            }}
          />
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Item
            img={item.img}
            name={item.name}
            room={item.room}
            onPress={() => navigation.navigate('DetailTenant')}
          />
        )}
      />
    </Container>
  );
};

export default SearchTenant;
