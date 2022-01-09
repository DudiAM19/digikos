import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  uploadImageSection: {
    marginTop: width * 0.04,
  },
  uploadImageLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.GREY_LIGHT,
    fontSize: RFValue(14),
  },
  uploadSection: {
    borderWidth: 1,
    borderColor: Colors.LINE_STROKE,
    height: width * 0.3,
    borderRadius: width * 0.03,
    borderStyle: 'dashed',
    marginTop: width * 0.02,
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    width: width / 3.75,
    height: width * 0.25,
    borderRadius: width * 0.03,
    backgroundColor: Colors.BACKGROUND,
    marginHorizontal: width * 0.015,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButtonIcon: {
    fontSize: RFValue(40),
    color: Colors.LIGHT_TEXT,
  },
  uploadNote: {
    fontFamily: FONTS.poppins[300],
    color: Colors.LIGHT_TEXT,
    fontSize: RFValue(12),
    marginTop: width * 0.01,
  },
});
