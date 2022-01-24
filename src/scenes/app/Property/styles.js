import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  filterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: width * 0.04,
  },
  filterItem: isSelected => ({
    height: width * 0.08,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.037,
    marginRight: width * 0.03,
    borderWidth: isSelected ? 0 : 1,
    borderColor: Colors.LIGHT_TEXT,
  }),
  filterItemTitle: isSelected => ({
    fontSize: RFValue(12),
    color: isSelected ? Colors.WHITE : Colors.LIGHT_TEXT,
    fontFamily: FONTS.poppins[500],
    marginTop: width * 0.005,
  }),
});
