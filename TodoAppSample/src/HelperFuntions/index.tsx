import {Dimensions} from 'react-native';
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
const {fontScale} = Dimensions.get('window');

export const getScaledFont = (fontSize: any) => {
  return fontSize / fontScale;
};
