import {widthPercentageToDP as WP, heightPercentageToDP as HP} from 'react-native-responsive-screen';

const THEMING = {
  spacing_10: 10,
  spacing_15: 15,
  spacing_20: 20,

  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
};

const LIGHT_THEME = {
  dark: false,
  colors: {
    primary: '#EE1B24',
    background: '#1e1e1e',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    whiteColor: '#fff',
  },
};

const DARK_THEME = {
  dark: true,
  colors: {
    primary: '#EE1B24',
    background: '#1e1e1e',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    whiteColor: '#fff',
  },
};

const SHADOWS = {
  shadow1: {
      shadowColor: 'black',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: THEMING.radius_20,
      elevation: 5,
  }
}

export default {
  LIGHT_THEME,
  DARK_THEME,
  WP,
  HP,
  THEMING,
  SHADOWS
}