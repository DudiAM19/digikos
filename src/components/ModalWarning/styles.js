import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',
  },
  closeButton: {
    width: width * 0.08,
    height: width * 0.08,
    backgroundColor: Colors.WHITE,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: width * 0.04,
    marginBottom: width * 0.02,
  },
  closeButtonIcon: {
    fontSize: RFValue(20),
    color: Colors.DRAKER_BLACK,
  },
  body: {
    height: width * 0.9,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: width * 0.04,
    borderTopRightRadius: width * 0.04,
    paddingHorizontal: width * 0.06,
    paddingVertical: width * 0.03,
    alignItems: 'center',
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
  },
  title: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(18),
    color: Colors.DRAKER_BLACK,
    textAlign: 'center',
  },
  message: {
    textAlign: 'center',
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
    color: Colors.GREY_LIGHT,
    marginTop: width * 0.03,
  },
  button: {
    position: 'absolute',
    bottom: width * 0.02,
  },
});
