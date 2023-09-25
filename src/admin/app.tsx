import Icon from "./extensions/icon.png";
import LogoWhite from "./extensions/logolateralwhite.png";

export default {
  config: {
    auth: {
      logo: LogoWhite,
    },
    head: {
      favicon: Icon,
    },
    locales: [],
    translations: {
      en: {
        "Auth.form.welcome.title": "Bem vindo ao ambiente de administração",
        "Auth.form.welcome.subtitle": "Acesse sua conta",
        "app.components.LeftMenu.navbrand.title": "Sal da terra Dashboard",
      },
    },
    menu: {
      logo: Icon,
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#01111A",
          primary200: "#01111A",
          primary500: "#46EBB5",
          primary600: "#46EBB5",
          primary700: "#46EBB5",
          neutral0: "#01111A",
          neutral100: "#121b25",
          neutral700: '#46EBB5',
          neutral800: "#FAFFFF",
          neutral900: "#FAFFFF",
          neutral1000: "#FAFFFF",
          buttonPrimary600: "#45C4B0",
          buttonPrimary500: "#46EBB5",
        },
      },
    },
  },
  bootstrap() {},
};