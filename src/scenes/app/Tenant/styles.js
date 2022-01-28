import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
  },
  tenantSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  avatar: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: 75,
  },
  tenantInfoSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.04,
    paddingVertical: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LINE_STROKE,
  },
  body: {
    flex: 1,
  },
  tenantName: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(14),
    color: Colors.BLACK,
  },
  tenantInfoRoom: {
    fontFamily: FONTS.poppins[400],
    fontSize: RFValue(12),
    color: Colors.BLACK_TEXT,
    marginTop: -width * 0.005,
  },
  connectSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  ml20: {
    marginLeft: width * 0.03,
  },
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
