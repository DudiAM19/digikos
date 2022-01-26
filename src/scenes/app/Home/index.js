import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Icon} from 'components';
import {Colors} from 'styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {LineChart} from 'react-native-chart-kit';
import styles from './styles';
import {menu} from 'constants';
import {useIsFocused} from '@react-navigation/native';
import useHome from './useHome';
import moment from 'moment';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientTo: 'white',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(26, 180, 249, ${opacity})`,
  labelColor: (opacity = 1) => Colors.BLACK_TEXT,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const {userData} = useHome(navigation);
  return (
    <SafeAreaView style={styles.root}>
      {isFocused && (
        <StatusBar barStyle={'light-content'} backgroundColor={'#1db1f2'} />
      )}
      <ScrollView>
        <ImageBackground
          source={require('assets/images/home-header.png')}
          imageStyle={styles.imageBackground}
          resizeMode="contain"
          style={styles.container}>
          <Text style={styles.currentDay}>
            {moment().format('dddd, DD MMMM YYYY')}
          </Text>
          <View style={styles.userInfoSection}>
            <View style={styles.userInfo}>
              <Text style={styles.username}>{userData.full_name}</Text>
              <Text style={styles.userRole}>
                {userData.role === 'owner' ? 'Pemilik' : 'Penyewa'}
              </Text>
            </View>
            <Image
              source={
                userData.avatar
                  ? {uri: userData.avatar}
                  : require('assets/images/5eb13bfdb4659efea4f8dace_profile-dummy.png')
              }
              style={styles.userAvatar}
            />
          </View>
        </ImageBackground>
        <View style={styles.menuSection}>
          <View style={styles.menuListSection}>
            {menu.map((item, index) => (
              <MenuList key={index} item={item} navigation={navigation} />
            ))}
          </View>
          <View style={styles.separator} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.announcementSection}>
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={[
                'rgba(68, 170, 251, 0.35)',
                'rgba(68, 170, 251, 1)',
                '#44AAFB',
              ]}
              style={styles.announcementWrap}>
              <Icon
                name="edit"
                type="AntDesign"
                style={styles.announcementIcon}
              />
            </LinearGradient>
            <Text style={styles.announcementLabel}>
              Tulis pengumuman disini
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bodySeparator} />
        <View style={styles.billSection}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <BillItem />
            <BillItem />
          </ScrollView>
        </View>
        <View style={styles.chartSection}>
          <Text style={styles.chartSectionLabel}>Statistik Keuangan</Text>
          <LineChart
            data={data}
            width={screenWidth - screenWidth * 0.13} // from react-native
            height={220}
            yAxisLabel={'Rp'}
            chartConfig={chartConfig}
            style={styles.lineChartKit}
            bezier
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MenuList = ({item, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Property')}
    activeOpacity={0.5}
    style={styles.menuList}>
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}
      colors={item.color}
      style={styles.menuListWrap}>
      <Image source={item.icon} style={styles.menuListIcon} />
    </LinearGradient>
    <Text style={styles.menuListLabel}>{item.label}</Text>
  </TouchableOpacity>
);

const BillItem = () => (
  <View style={styles.billItem}>
    <View style={styles.billIconWrap}>
      <Image
        source={require('assets/images/calendar.png')}
        style={styles.billIcon}
      />
    </View>
    <View style={styles.billInfo}>
      <Text numberOfLines={1} style={styles.billLabel}>
        Tagihan - Apartemen A1, Kamar 12B
      </Text>
      <Text numberOfLines={1} style={styles.billName}>
        a.n Andi Firwansyah
      </Text>
      <View style={styles.billPriceInfo}>
        <Text style={styles.billPrice}>Rp 2.500.000</Text>
        <Text style={styles.billDueDate}>18 December 2022</Text>
      </View>
    </View>
  </View>
);

export default Home;
