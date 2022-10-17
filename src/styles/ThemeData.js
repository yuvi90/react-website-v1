import { palette, typography } from "./partials";

export const theme = {

  colors: {
    heading: "rgb(24 24 29)",
    text: "rgb(24 24 29)",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#fff",
    gradient: "linear-gradient(0deg, rgb(132 144 255)/0%, rgb(98 189 252)/100%)",
    shadow: "0px 1px 3px 0px rgba(0,0,0,0.02), 0px 0px 0px 1px rgba(27, 31, 35, 0.15)",
    shadowSupport: "0px 1px 4px rgba(0,0,0,0.16)",
    ...palette
  },
  
  media: { mobile: "768px", tab: "998px" },

  mode: {
    light: {
      bg: palette.grey[100],
    },
    dark: {
      bg: palette.grey[600],
    },
  },

  ...typography,
};

const gridTheme = {
  gridColumns: 24, // default 12
  breakpoints: { // defaults below
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: { // defaults below
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

const BASE_CONF = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90 // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120 // 1920px
  }
}