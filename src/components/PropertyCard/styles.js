import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginVertical: width * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BACKGROUND,
    paddingBottom: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: width * 0.28,
    width: width * 0.37,
    borderRadius: width * 0.03,
  },
  body: {
    paddingHorizontal: width * 0.04,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: RFValue(14),
    color: Colors.YELLOW,
  },
  ratingValue: {
    fontSize: RFValue(10.5),
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    marginTop: width * 0.007,
    marginLeft: width * 0.01,
  },
  propertyName: {
    fontSize: RFValue(15),
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
  },
  propertyPrice: {
    fontSize: RFValue(13),
    fontFamily: FONTS.poppins[600],
    color: Colors.PRIMARY,
    // marginTop: -width * 0.01,
  },
  propertyPriceLable: {
    fontSize: RFValue(11),
    fontFamily: FONTS.poppins[400],
    color: Colors.LIGHT_TEXT,
    marginTop: -width * 0.013,
  },
  propertyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.01,
  },
  propertyInfoText: color => ({
    fontSize: RFValue(11),
    fontFamily: FONTS.poppins[500],
    color: color,
  }),
  propertyInfoDot: {
    fontSize: RFValue(11),
    fontFamily: FONTS.poppins[500],
    color: Colors.LIGHT_TEXT,
    marginHorizontal: width * 0.02,
  },
  optionButton: {
    alignSelf: 'flex-start',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  optionButtonIcon: {
    fontSize: RFValue(18),
    color: Colors.DRAKER_BLACK,
  },
});
