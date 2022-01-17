import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
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
  btnsignup: {
    width: '100%',
    height: width * 0.13,
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
