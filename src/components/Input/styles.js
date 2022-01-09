import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  inputItem: isFocused => ({
    borderBottomWidth: 1,
    borderBottomColor: isFocused ? Colors.PRIMARY : Colors.LINE_STROKE,
    marginVertical: width * 0.02,
  }),
  inputLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.GREY_LIGHT,
    fontSize: RFValue(13),
  },
  input: {
    fontSize: RFValue(14),
    paddingHorizontal: 0,
    marginTop: -width * 0.025,
    paddingBottom: width * 0.015,
    color: Colors.DRAKER_BLACK,
  },
});
