import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, FONTS} from 'styles';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  inputItem: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LINE_STROKE,
    marginVertical: width * 0.02,
  },
  inputLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.GREY_LIGHT,
    fontSize: RFValue(13),
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: width * 0.08,
    justifyContent: 'center',
    paddingBottom: width * 0.01,
  },
  inputPlaceholder: {
    flex: 1,
    fontSize: RFValue(14),
    paddingHorizontal: 0,
    marginTop: -width * 0.025,
    paddingBottom: width * 0.015,
    color: Colors.GREY,
  },
  inputValue: {
    flex: 1,
    fontSize: RFValue(14),
    paddingHorizontal: 0,
    marginTop: -width * 0.025,
    paddingBottom: width * 0.015,
    color: Colors.DRAKER_BLACK,
  },
  arrowIcon: {
    fontSize: RFValue(16),
    color: Colors.GREY_LIGHT,
    paddingBottom: width * 0.01,
  },
  error: {
    fontFamily: FONTS.poppins[400],
    color: Colors.RED_HEAVY,
    fontSize: RFValue(11),
  },

  // modal style
  modalContainer: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  body: {
    height: height,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.08,
  },
  closeModalButtonIcon: {
    fontSize: RFValue(20),
    color: Colors.DRAKER_BLACK,
  },
  modalTitleSection: {
    marginVertical: width * 0.08,
  },
  modalTitle: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(15),
    color: Colors.DRAKER_BLACK,
  },
  modalSubTitle: {
    fontFamily: FONTS.poppins[400],
    fontSize: RFValue(12),
    color: Colors.GREY_TEXT,
  },
  modalItemSection: {
    borderBottomWidth: 0.7,
    borderBottomColor: Colors.LINE_STROKE,
    paddingVertical: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalItemTitle: {
    flex: 1,
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(13),
    color: Colors.DRAKER_BLACK,
    marginTop: width * 0.006,
  },
  modalItemCheckIcon: {
    fontSize: RFValue(18),
    color: Colors.PRIMARY,
  },
});
