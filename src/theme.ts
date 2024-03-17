import { StyleSheet } from "react-native";



const FONT_FAMILY = {
  LATO_REGULAR: 'Lato-Regular',
  LATO_MEDIUM: 'Lato-Medium',
  LATO_BOLD: 'Lato-Bold',
  LATO_BOLDITALIC: 'Lato-BoldItalic',
  LATO_ITALIC: 'Lato-Italic',
}





const theme = StyleSheet.create({
  primary: {
    color: "#FF3131"
  },
  textColor: {
    color: "#112211"
  },
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
  marginTop5: {
    marginTop: 5
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
    borderColor: "#F2F2F2",
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
  H3: {
    color: "#112211",
    fontFamily: "Inter-SemiBold",
    fontWeight: "400",
    fontSize: 14,
  },
  flexColumn: {
    flexDirection: 'column'
  },
  flexRow: {
    flexDirection: 'row'
  },
  marginBottom10: {
    marginBottom: 10
  },
  marginBottom20: {
    marginBottom: 20
  },
  marginBottom30: {
    marginBottom: 30
  },
  flex1: {
    flex: 1
  },
  marginVertical22: {
    marginVertical: 22
  },
  primarybutton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderColor: "#FF3131",
    backgroundColor: '#FF3131',
    color: "#fff",
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondarybutton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderColor: "#F6F6F6",
    backgroundColor: '#F6F6F6',
    color: "#6D6D6D",
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default theme;
