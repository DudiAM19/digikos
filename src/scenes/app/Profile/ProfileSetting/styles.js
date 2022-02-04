import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingTop: width * 0.02,
  },
  sectionLable: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
    color: Colors.DRAKER_BLACK,
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: width * 0.02,
  },
  avatarCameraSection: {
    height: width * 0.14,
    width: width * 0.14,
    borderRadius: 75,
    backgroundColor: Colors.LINE_STROKE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: width * 0.14,
    width: width * 0.14,
    borderRadius: 75,
  },
  avatarCameraIcon: {
    fontSize: RFValue(21),
    color: Colors.DRAKER_BLACK,
  },
  avatarSectionLable: {
    flex: 1,
    paddingLeft: width * 0.03,
    fontFamily: FONTS.poppins[400],
    fontSize: RFValue(11.4),
    color: Colors.LIGHT_TEXT,
  },
  inputSection: {
    flex: 1,
    paddingTop: width * 0.04,
  },
});
