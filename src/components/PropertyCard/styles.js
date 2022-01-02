import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: width * 0.55,
    backgroundColor: Colors.WHITE,
    borderWidth: 0.5,
    borderColor: Colors.LINE_STROKE,
    borderRadius: width * 0.03,
    marginVertical: width * 0.02,
  },
  image: {
    height: width * 0.3,
    borderRadius: width * 0.03,
  },
  body: {
    flex: 1,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  propertyIcon: {
    fontSize: RFValue(20),
    color: Colors.DRAKER_BLACK,
  },
  propertyName: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(15),
    color: Colors.DRAKER_BLACK,
    marginTop: width * 0.011,
    marginLeft: width * 0.02,
  },
  propertyRoomTotal: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
    color: Colors.BLACK_TEXT,
  },
  indicatorEmpty: {
    color: Colors.GREEN,
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(11),
  },
  indicatorFilled: {
    color: Colors.ORANGE,
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(11),
  },
  separatorPipe: {
    marginHorizontal: width * 0.02,
  },
});
