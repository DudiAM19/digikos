import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    width: width * 0.8,
    height: width * 0.14,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginVertical: width * 0.04,
  },
  title: {
    color: 'white',
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(14),
    marginTop: width * 0.005,
  },
});
