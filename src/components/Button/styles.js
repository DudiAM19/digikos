import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: isSmall => ({
    width: '100%',
    height: isSmall ? width * 0.12 : width * 0.13,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.035,
    marginVertical: width * 0.04,
  }),
  title: {
    color: 'white',
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(14),
    marginTop: width * 0.005,
  },
});
