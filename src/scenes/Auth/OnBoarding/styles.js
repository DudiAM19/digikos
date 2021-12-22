import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  textwelcome: {
    fontFamily: FONTS.poppins[600],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(30),
    marginTop: width * 0.17,
  },
  textsign: {
    color: Colors.GREY_TEXT,
    fontFamily: FONTS.poppins[500],
    marginTop: -width * 0.02,
  },
  img: {
    width: width * 0.8,
    height: width * 0.8,
    marginVertical: width * 0.1,
  },
  btnsign: {
    width: width * 0.8,
    height: width * 0.15,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginVertical: width * 0.04,
  },
  textbtnsign: {
    color: 'white',
    fontFamily: FONTS.poppins[500],
  },
  btnsignup: {
    width: width * 0.8,
    height: width * 0.14,
    backgroundColor: 'rgba(252, 106, 35, 0.1)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textbtnnoaccount: {
    color: Colors.BLACK_TEXT,
    fontFamily: FONTS.poppins[500],
  },
  textbtnsingup: {
    color: Colors.ORANGE,
    fontFamily: FONTS.poppins[500],
    marginHorizontal: width * 0.01,
  },
});
