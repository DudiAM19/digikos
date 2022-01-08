import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  tenantsection: {
    alignItems: 'center',
    flex: 1,
  },
  imgprofile: {
    width: width * 0.23,
    height: width * 0.23,
    marginTop: width * 0.08,
  },
  textsection: {
    marginTop: width * 0.05,
  },
  textname: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(20),
    color: Colors.DRAKER_BLACK,
    textAlign: 'center',
  },
  textroom: {
    fontFamily: FONTS.poppins[500],
    color: Colors.LIGHT_TEXT,
    textAlign: 'center',
  },
  iconsection: {
    flexDirection: 'row',
  },
  btn: {
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.1,
    marginVertical: width * 0.08,
    marginHorizontal: width * 0.03,
  },
  iconcall: {
    fontSize: RFValue(27),
    color: Colors.ORANGE,
  },
  iconwhatsapp: {
    fontSize: RFValue(27),
    color: Colors.GREEN_LIGHT,
  },
  contacttenant: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    width: width,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
    padding: width * 0.06,
  },
  datasection: {
    flexDirection: 'row',
  },
  text1: {
    flex: 1,
    fontFamily: FONTS.poppins[400],
    fontSize: RFValue(13),
    color: Colors.BLACK,
  },
  text2: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(13),
    color: Colors.BLACK,
  },
  border: {
    height: width * 0.003,
    backgroundColor: Colors.LINE_STROKE,
    marginVertical: width * 0.02,
  },
});