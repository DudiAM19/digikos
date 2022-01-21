import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: width * 0.04,
  },
  paymentinfosection: {
    width: '100%',
    height: width * 0.2,
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: Colors.LINE_STROKE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    marginBottom: width * 0.03,
  },
  img: {
    width: width * 0.14,
    height: width * 0.14,
  },
  namesection: {
    marginHorizontal: width * 0.03,
  },
  textname: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(14),
    marginBottom: width * 0.009,
  },
  textprice: {
    fontFamily: FONTS.poppins[500],
    color: Colors.ORANGE,
    fontSize: RFValue(14),
  },
  infosection: {
    alignItems: 'flex-end',
  },
  progresproses: {
    width: width * 0.21,
    height: 20,
    backgroundColor: 'rgba(252, 106, 35, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.015,
    marginBottom: width * 0.03,
  },
  progreslunas: {
    width: width * 0.21,
    height: 20,
    backgroundColor: 'rgba(29, 174, 5, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.015,
    marginBottom: width * 0.03,
  },
  progresditolak: {
    width: width * 0.21,
    height: 20,
    backgroundColor: 'rgba(255, 6, 6, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.015,
    marginBottom: width * 0.03,
  },
  textprogresproses: {
    color: Colors.ORANGE,
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
  },
  textprogreslunas: {
    color: Colors.GREEN_LIGHT,
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
  },
  textprogresditolak: {
    color: Colors.RED,
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
  },
  date: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(11),
    color: Colors.LIGHT_TEXT,
  },
});
