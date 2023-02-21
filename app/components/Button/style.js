import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  pressedText: {
    color: "rgb(235, 235, 235)",
  },
  defaultColor: {
    color: "rgb(30, 30, 30)",
  },
  buttonDefault: {
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    bottom: 5,
    width: screenWidth * 0.9,
    position: "absolute",
    padding: 20,
  },
  default: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 27,
  },
});

export default styles;
