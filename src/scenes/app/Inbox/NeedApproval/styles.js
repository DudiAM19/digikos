import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  content: {
    margin: width * 0.04,
  },
  approvelsection: {
    flexDirection: 'row',
  },
  textsection: {
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.8,
    marginLeft: width * 0.04,
  },
  icon: color => ({
    color: color,
    fontSize: RFValue(30),
  }),
  textapproveltype: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    flex: 1,
  },
  forwardicon: {
    fontSize: RFValue(18),
    color: Colors.DRAKER_BLACK,
  },
  border: {
    height: width * 0.003,
    backgroundColor: Colors.LINE_STROKE,
    width: width * 0.8,
    marginLeft: width * 0.04,
    marginVertical: width * 0.03,
  },
});
