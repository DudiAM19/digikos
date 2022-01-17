import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  contaner: {
    flex: 1,
    marginHorizontal: width * 0.07,
  },
  headerSection: {
    flex: 1,
  },
  header: {
    height: width * 0.16,
    justifyContent: 'center',
    marginBottom: width * 0.05,
  },
  arrowleft: {
    fontSize: RFValue(25),
    color: Colors.DRAKER_BLACK,
  },
  textwelcome: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(25),
  },
  slidersection: {
    flexDirection: 'row',
  },
  slider1: {
    width: width * 0.06,
    height: width * 0.013,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  slider2: {
    width: width * 0.015,
    height: width * 0.013,
    borderRadius: 10,
    marginLeft: width * 0.01,
    backgroundColor: Colors.GREY,
  },
  slider3: {
    width: width * 0.015,
    height: width * 0.013,
    borderRadius: 10,
    marginHorizontal: width * 0.01,
    backgroundColor: Colors.GREY,
  },
  formSection: {
    flex: 1,
    marginTop: width * 0.2,
  },
  inputItem: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LINE_STROKE,
    marginVertical: width * 0.02,
  },
  inputLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.GREY_LIGHT,
    fontSize: RFValue(13),
  },
  input: {
    fontSize: RFValue(13),
    paddingHorizontal: 0,
    marginTop: -width * 0.015,
  },
  buttonSection: {
    paddingHorizontal: width * 0.07,
    height: width * 0.25,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {},
});
