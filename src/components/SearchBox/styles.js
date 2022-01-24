import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: width * 0.11,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.025,
    backgroundColor: Colors.BACKGROUND,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: RFValue(20),
    color: Colors.LIGHT_TEXT,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.poppins[500],
    color: Colors.LIGHT_TEXT,
    marginTop: width * 0.005,
    fontSize: RFValue(12),
    paddingLeft: width * 0.02,
  },
});
