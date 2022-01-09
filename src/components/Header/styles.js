import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: isTransparent => ({
    height: width * 0.14,
    backgroundColor: isTransparent ? 'transparent' : Colors.WHITE,
    paddingHorizontal: width * 0.04,
  }),
  section: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButton: {
    flex: 0.1,
  },
  leftButtonIcon: {
    fontSize: RFValue(22),
    color: Colors.DRAKER_BLACK,
  },
  rightButton: {
    flex: 0.1,
  },
  rightButtonIcon: {
    fontSize: RFValue(20),
    color: Colors.LIGHT_TEXT,
  },
  bodyCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyStart: {
    flex: 1,
    justifyContent: 'center',
  },
  smTitle: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(15),
    color: Colors.DRAKER_BLACK,
  },
  lgTitle: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(17),
    color: Colors.DRAKER_BLACK,
  },
});
