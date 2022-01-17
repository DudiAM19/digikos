import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    marginHorizontal: width * 0.04,
  },
  profilesection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textprofile: {
    flex: 1,
  },
  imgprofile: {
    width: width * 0.14,
    height: width * 0.12,
  },
  textname: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(21),
    color: Colors.DRAKER_BLACK,
  },
  textowner: {
    fontFamily: FONTS.poppins[500],
    color: Colors.LIGHT_TEXT,
    fontSize: RFValue(16),
  },
  premiummember: {
    flexDirection: 'row',
    alignItems: 'center',
    height: width * 0.17,
    backgroundColor: '#1FB8FC1A',
    borderRadius: width * 0.03,
    marginVertical: width * 0.06,
  },
  imgpremiummember: {
    width: width * 0.11,
    height: width * 0.11,
    marginHorizontal: width * 0.03,
  },
  textpremiummember: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(16),
    flex: 1,
    marginTop: width * 0.002,
  },
  chevronright: {
    fontSize: RFValue(16),
    marginHorizontal: width * 0.04,
  },
  iconfitur: color => ({
    color: color,
    fontSize: RFValue(22),
    marginHorizontal: width * 0.03,
  }),
  fitursection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: width * 0.02,
    height: width * 0.1,
  },
  textsettings: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(14),
    color: Colors.LIGHT_TEXT,
  },
  textfitur: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    flex: 1,
    fontSize: RFValue(16),
  },
});
