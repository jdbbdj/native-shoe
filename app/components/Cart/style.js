import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  cartWithShadow: {
    width: screenWidth * 0.9,
    paddingVertical: 10,
    marginHorizontal: screenWidth * 0.05,
    marginVertical: 2.5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  middleSection: {
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.3,
    aspectRatio: 1,
  },
});

export default styles;
