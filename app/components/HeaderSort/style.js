import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    marginTop: 40,
    marginHorizontal: screenWidth * 0.05,
    borderColor: "#080201",
    borderWidth: 1,
  },
});

export default styles;
