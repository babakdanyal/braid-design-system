const white = '#fff';
const black = '#000';
const blue2 = '#298EB9';
const blue3 = '#94C9E0';
const blue5 = '#EEF8FC';
const alert = '#eb0000';
const grey1 = '#333';
const grey2 = '#666';
const grey4 = '#ccc';
const candidate = '#0c4b85'; // SEEK Asia name for this color
const info = candidate;
const positive = '#498307';
const critical = alert;

const focusColor = blue3;
const formAccent = blue2;
const brandAccent = '#0d3880';

export const colors = {
  link: blue2,
  black,
  white,
  critical,
  info,
  positive,
  secondary: grey2,
  brandAccent,
  formAccent,
  neutral: grey1,
};

export const fills = {
  formAccent,
  formAccentDisabled: grey4,
  critical,
  info,
  positive,
  secondary: grey1,
  white,
};

export const borderRadius = {
  standard: '4px',
};

export const boxShadows = {
  outlineFocus: focusColor,
  borderStandard: grey4,
  borderCritical: alert,
  borderFormAccent: formAccent,
};

export const backgroundColor = {
  input: white,
  inputDisabled: grey4,
  brandAccent,
  formAccent,
  formAccentDisabled: grey4,
  selection: blue5,
  card: white,
  critical,
  info,
  positive,
};

export const fontFamily = {
  fontFamily:
    'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  strong: 700,
};

export const transforms = {
  touchable: 'scale(0.98)',
};
