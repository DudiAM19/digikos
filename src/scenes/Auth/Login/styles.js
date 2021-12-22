import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    width: width,
    height: width * 0.3,
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
  },
  arrowleft: {
    fontSize: RFValue(28),
    color: Colors.DRAKER_BLACK,
  },
  textwelcome: {
    fontFamily: FONTS.poppins[600],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(30),
    marginHorizontal: width * 0.1,
  },
  slidersection: {
    flexDirection: 'row',
  },
  slider1: {
    width: width * 0.06,
    height: width * 0.015,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    marginLeft: width * 0.11,
  },
  slider2: {
    width: width * 0.015,
    height: width * 0.015,
    borderRadius: 10,
    marginLeft: width * 0.01,
    backgroundColor: Colors.GREY,
  },
  slider3: {
    width: width * 0.015,
    height: width * 0.015,
    borderRadius: 10,
    marginHorizontal: width * 0.01,
    backgroundColor: Colors.GREY,
  },
  formsection: {
    marginVertical: width * 0.17,
  },
  textform: {
    fontFamily: FONTS.poppins[500],
    marginHorizontal: width * 0.1,
    color: Colors.GREY_LIGHT,
    marginTop: width * 0.1,
  },
  input: {
    width: width * 0.8,
    // backgroundColor: Colors,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    fontFamily: FONTS.poppins[400],
    color: FONTS.GREY,
  },
  inputsection: {
    width: width,
    alignItems: 'center',
  },
  btnsection: {
    alignItems: 'center',
  },
});
