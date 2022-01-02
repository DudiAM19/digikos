import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  tenantsection: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: width * 0.04,
    width: width,
    height: width * 0.2,
    alignItems: 'center',
  },
  imgprofile: {
    width: width * 0.14,
    height: width * 0.14,
  },
  textsection: {
    marginHorizontal: width * 0.04,
    flex: 1,
  },
  textname: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(16),
    color: Colors.BLACK,
  },
  textroom: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(11),
    color: Colors.DRAKER_BLACK,
  },
  iconsection: {
    flexDirection: 'row',
    // paddingHorizontal: width * 0.05,
  },
  icon: {
    fontSize: RFValue(25),
    color: Colors.LIGHT_TEXT,
    marginHorizontal: width * 0.03,
  },
  border: {
    width: width * 0.72,
    height: width * 0.002,
    backgroundColor: Colors.LINE_STROKE,
    marginLeft: width * 0.22,
  },
});
