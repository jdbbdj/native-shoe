import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowWidth: {
    width: "100%",
  },
  justify: {
    justifyContent: "space-between",
  },
  titlePrice: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  avatarStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },
  avatarFlexStartType: {
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",

    marginTop: screenHeight * 0.05,
  },
  iconDescription: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  footerFlexEnd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  descriptionIcon: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  iconHandler: {
    marginHorizontal: 10,
  },
  footerIconHandler: {},
  titlePriceIcon: {
    marginRight: 20,
  },
});

export default styles;
