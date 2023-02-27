import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Global = StyleSheet.create({
  globalMarginHorizontal: {
    marginHorizontal: screenWidth * 0.05,
  },
  globalAdvancedSearchMarginBottom: {
    marginBottom: screenHeight * 0.005,
    height: 200,
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
  defaultborderWithShadow: {
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#353535",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  iconAvatar: {
    width: 40,
    height: 40,
    marginRight: screenWidth * 0.05,
    borderWidth: 1,
    borderRadius: 40 / 2,
  },
  defaultImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 40 / 2,
  },
});

export default Global;
