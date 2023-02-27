import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  footerContainer: {
    height: screenHeight * 0.1,
    marginTop: 10,
  },
});

export default styles;
