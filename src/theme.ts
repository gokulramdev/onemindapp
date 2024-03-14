import { StyleSheet } from "react-native";



const FONT_FAMILY = {
  LATO_REGULAR: 'Lato-Regular',
  LATO_MEDIUM: 'Lato-Medium',
  LATO_BOLD: 'Lato-Bold',
  LATO_BOLDITALIC: 'Lato-BoldItalic',
  LATO_ITALIC: 'Lato-Italic',
}





const theme = StyleSheet.create({

  link: {
    textDecorationLine: 'underline',
    color: 'blue'
  },
  redLink: {
    textDecorationLine: 'underline',
    color: 'red'
  },
  statusBarColor: {
    color: "#df5607"
  },
  leftPadding5: {
    paddingLeft: 5
  },
  leftPadding10: {
    paddingLeft: 10
  },
  rightPadding5: {
    paddingRight: 5
  },
  rightPadding10: {
    paddingRight: 10
  },

  textCenter: {
    textAlign: "center",
  },


  flexOne: {
    flex: 1,
  },
  contentCenter: {
    justifyContent: "center",
  },

  border: {
    borderWidth: 1,
    borderColor: "#000",
  },
  H1: {
    color: "#112211",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default theme;
