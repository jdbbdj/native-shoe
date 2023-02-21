import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  cart: {
    width: screenWidth * 0.9,
    paddingVertical: 10,
    marginHorizontal: screenWidth * 0.05,
    borderWidth: 1,
    marginVertical: 2.5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  middleSection: {},
  buttons: {
    flexDirection: "row",
  },
  image: {
    width: screenWidth * 0.3,
    aspectRatio: 1,
  },
});

export default styles;
