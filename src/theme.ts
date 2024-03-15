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
  marginTop10: {
    marginTop: 10
  },
  marginTop20: {
    marginTop: 20
  },
  marginTop30: {
    marginTop: 30
  },
  marginTop40: {
    marginTop: 40
  },
  marginHorizontal20: {
    marginHorizontal: 20
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
  verticalCenter: {
    alignContent: "center",
    alignItems: "center"
  },

  border: {
    borderWidth: 1,
    borderColor: "#000",
  },
  H1: {
    color: "#112211",
    fontFamily: "Inter-SemiBold",
    fontWeight: "800",
    fontSize: 16,
  },
  H2: {
    color: "#112211",
    fontFamily: "Inter-SemiBold",
    fontWeight: "800",
    fontSize: 14,
  },
});

export default theme;
