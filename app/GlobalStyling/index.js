import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Global = StyleSheet.create({
  globalMarginHorizontal: {
    marginHorizontal: screenWidth * 0.05,
  },
  shadowMotherContainer: {
    overflow: "hidden",
    paddingBottom: 5,
  },
  shadowChildElevated: {
    borderWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: "#ffffff",
  },
});

export default Global;
