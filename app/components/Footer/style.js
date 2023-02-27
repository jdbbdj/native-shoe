import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 10,
    marginHorizontal: screenWidth * 0.05,
  },
});

export default styles;
