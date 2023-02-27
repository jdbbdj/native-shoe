import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    marginTop: 10,
    marginHorizontal: screenWidth * 0.05,
  },
});

export default styles;
