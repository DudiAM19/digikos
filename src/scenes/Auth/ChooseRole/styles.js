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
    fontSize: RFValue(25),
    color: Colors.DRAKER_BLACK,
  },
  textwelcome: {
    fontFamily: FONTS.poppins[600],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(30),
    marginHorizontal: width * 0.1,
  },
});
