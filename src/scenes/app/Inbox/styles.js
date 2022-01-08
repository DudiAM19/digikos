import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  tabheader: {
    flexDirection: 'row',
    height: width * 0.1,
    backgroundColor: Colors.WHITE,
  },
  tabcontainer: isActive => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: isActive ? 3 : 1,
    borderBottomColor: isActive ? Colors.PRIMARY : Colors.LINE_STROKE,
  }),
  tabtitle: isActive => ({
    fontFamily: FONTS.poppins[500],
    color: isActive ? Colors.DRAKER_BLACK : Colors.LIGHT_TEXT,
    fontSize: RFValue(13),
  }),
});
