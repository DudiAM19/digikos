import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: width * 1.4,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.WHITE,
    borderTopEndRadius: width * 0.05,
    borderTopStartRadius: width * 0.05,
    paddingHorizontal: width * 0.04,
  },
  invoice: {
    width: '100%',
    height: width * 0.8,
    backgroundColor: Colors.WHITE,
    marginTop: -width * 0.32,
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: Colors.LINE_STROKE,
    borderStyle: 'dashed',
  },
  invoicedate: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.LINE_STROKE,
    borderStyle: 'dashed',
    height: width * 0.11,
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  noinvoice: {
    flex: 1,
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
    color: Colors.LIGHT_TEXT,
  },
  date: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
    color: Colors.LIGHT_TEXT,
  },
  detailinvoice: {
    width: '100%',
    height: '100%',
    paddingHorizontal: width * 0.04,
  },
});
