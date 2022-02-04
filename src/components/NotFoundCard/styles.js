import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  noDataSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.15,
    marginHorizontal: width * 0.1,
  },
  noItemGif: {
    width: width * 0.7,
    height: width * 0.7,
  },
  noItemLable: {
    fontFamily: FONTS.poppins[400],
    fontSize: RFValue(13),
    color: Colors.BLACK_TEXT,
    marginTop: -width * 0.005,
    textAlign: 'center',
  },
});
