import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  footerContainer: {
    height: screenHeight * 0.1,
    marginTop: 10,
    marginHorizontal: screenWidth * 0.05,
    borderColor: "#080201",
    borderWidth: 1,
  },
});

export default styles;
