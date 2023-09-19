const typography = {
  type: {
    primary: 'Lato',
    secondary: 'Montserrat',
  },
  weight: {
    thin: 100,
    light: 300,
    regular: 400,
    bold: 700,
    black: 900,
  },
  size: {
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '20px',
    lg: '25px',
    xl: '38px',
    xxl: '80px',
  },
}

const navbar = {
  backgroundColor: '#574B5D',
}

const colors = {
  primary: '#3C3341',
  secondary: '#6D6073',
  textPrimary: '#322f2f',
  textSecondary: '#50565E',
  silver: '#ECEFF1',
  white: '#FFFFFF',
  black: '#50565E',
  success: '#5ACC5A',
  warning: '#FFC247',
  danger: '#CC001B',
  error: '#F20000',
  background: 'red',
  footer: '#330000',
  topButton: '#330000',
  buttonHover: '#820000',
  inputLegend: 'hsl(0,0%,50%)',
  googleColor: '#d73d32',
  submitColor: '#05a081',
}

const opacities = {
  default: 0.5,
  soft: 0.8,
}

const shadows = {
  box: {
    soft: '0px 0px 2px 0px rgba(0, 0, 0, 0.75)',
    medium: '0px 0px 4px 0px rgba(0, 0, 0, 0.75)',
    hard: '0px 0px 7px 0px rgba(0, 0, 0, 0.75)',
    navbar: '0px 3px 10px 0px rgba(0, 0, 0, 0.5);',
  },
}

const border = {
  radius: '5px',
}

const deciceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

const device = {
  mobileS: `(min-width: ${deciceSizes.mobileS})`,
  mobileM: `(min-width: ${deciceSizes.mobileM})`,
  mobileL: `(min-width: ${deciceSizes.mobileL})`,
  tablet: `(min-width: ${deciceSizes.tablet})`,
  laptop: `(min-width: ${deciceSizes.laptop})`,
  laptopL: `(min-width: ${deciceSizes.laptopL})`,
  desktop: `(min-width: ${deciceSizes.desktop})`,
  desktopL: `(min-width: ${deciceSizes.desktop})`,
}

const pallete = {
  color1: '#6d6073',
  color2: '#574b5d',
  color3: '#3c3341',
  color4: '#241b28',
  color5: '#221428',
}

export default {
  typography,
  navbar,
  colors,
  opacities,
  shadows,
  border,
  device,
  pallete,
}
