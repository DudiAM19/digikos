import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.07,
  },
  header: {
    width: width,
    height: width * 0.3,
    justifyContent: 'center',
  },
  arrowleft: {
    fontSize: RFValue(25),
    color: Colors.DRAKER_BLACK,
  },
  textwelcome: {
    fontFamily: FONTS.poppins[600],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(30),
    marginHorizontal: width * 0.1,
  },
  topSection: {},
  topTitle: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(25),
  },
  slideSection: {
    flexDirection: 'row',
  },
  slideFull: {
    width: width * 0.06,
    height: width * 0.013,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  slide: {
    width: width * 0.015,
    height: width * 0.013,
    borderRadius: 10,
    marginLeft: width * 0.01,
    backgroundColor: Colors.GREY,
    marginHorizontal: width * 0.01,
  },
  roleSection: {
    flex: 1,
    paddingVertical: width * 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  role: isSelected => ({
    width: width / 2.5,
    height: width / 2.5,
    borderWidth: isSelected ? 1.5 : 1,
    borderRadius: width * 0.03,
    borderColor: isSelected ? Colors.PRIMARY : Colors.LINE_STROKE,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.02,
  }),
  roleImage: {
    width: width * 0.25,
    height: width * 0.25,
  },
  roleLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(14),
    marginTop: width * 0.02,
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
