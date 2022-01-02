import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  container: {
    height: width * 0.5,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: width * 0.06,
    justifyContent: 'center',
    paddingBottom: width * 0.15,
  },
  imageBackground: {
    height: width * 0.7,
  },
  currentDay: {
    fontFamily: FONTS.poppins[500],
    color: Colors.WHITE,
    fontSize: RFValue(13),
    marginBottom: width * 0.05,
  },
  userInfoSection: {
    flexDirection: 'row',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontFamily: FONTS.poppins[500],
    color: Colors.WHITE,
    fontSize: RFValue(20),
  },
  userRole: {
    fontFamily: FONTS.poppins[500],
    color: Colors.WHITE,
    fontSize: RFValue(14),
  },
  userAvatar: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 75,
  },

  // menu section
  menuSection: {
    width: width * 0.9,
    // height: width * 0.3,
    marginHorizontal: width * 0.06,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: width * 0.03,
    zIndex: 1000,
    top: width * 0.37,
    backgroundColor: Colors.WHITE,
    paddingVertical: width * 0.03,
  },
  menuListSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.04,
  },
  menuList: {
    width: width * 0.18,
    alignItems: 'center',
    marginHorizontal: width * 0.02,
    marginBottom: width * 0.03,
  },
  menuListWrap: {
    width: width * 0.145,
    height: width * 0.145,
    backgroundColor: Colors.WHITE,
    borderRadius: width * 0.045,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuListIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  menuListLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.GREY_LIGHT,
    fontSize: RFValue(10.8),
    marginTop: width * 0.02,
  },
  separator: {
    width: '100%',
    height: width * 0.015,
    backgroundColor: Colors.BACKGROUND,
  },

  // announcement section
  announcementSection: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    alignItems: 'center',
    marginTop: width * 0.03,
  },
  announcementWrap: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 75,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  announcementIcon: {
    color: Colors.WHITE,
    fontSize: RFValue(20),
  },
  announcementLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.GREY_LIGHT,
    fontSize: RFValue(14),
    marginTop: width * 0.01,
    paddingLeft: width * 0.03,
  },

  bodySeparator: {
    height: width * 0.35,
    // backgroundColor: 'red',
  },

  // bill section
  billSection: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
  },
  billItem: {
    width: width * 0.85,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    borderRadius: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: width * 0.03,
  },
  billIconWrap: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 75,
    backgroundColor: Colors.LINE_STROKE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  billIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  billInfo: {
    flex: 1,
    paddingLeft: width * 0.03,
  },
  billLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(11),
  },
  billName: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(12),
    marginTop: -width * 0.005,
  },
  billPriceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -width * 0.01,
  },
  billPrice: {
    flex: 1,
    fontFamily: FONTS.poppins[500],
    color: Colors.ORANGE,
    fontSize: RFValue(12),
  },
  billDueDate: {
    fontFamily: FONTS.poppins[500],
    color: Colors.LIGHT_TEXT,
    fontSize: RFValue(10),
  },

  // chart section
  chartSection: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginTop: width * 0.03,
    borderTopLeftRadius: width * 0.04,
    borderTopRightRadius: width * 0.04,
    paddingHorizontal: width * 0.06,
    paddingVertical: width * 0.04,
  },
  chartSectionLabel: {
    fontFamily: FONTS.poppins[500],
    color: Colors.DRAKER_BLACK,
    fontSize: RFValue(13),
  },
  lineChartKit: {
    marginVertical: width * 0.05,
  },
});
