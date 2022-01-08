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
  notifsection: {
    flexDirection: 'row',
    marginBottom: width * 0.02,
  },
  img: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.1,
  },
  textsection: {
    marginHorizontal: width * 0.05,
  },
  textname: {
    fontFamily: FONTS.poppins[500],
    color: Colors.BLACK,
    fontSize: RFValue(16),
  },
  textmessage: {
    fontFamily: FONTS.poppins[400],
    color: Colors.LIGHT_TEXT,
    fontSize: RFValue(12),
  },
  border: {
    marginVertical: width * 0.02,
    width: width * 0.72,
    height: width * 0.003,
    backgroundColor: Colors.LINE_STROKE,
  },
});
