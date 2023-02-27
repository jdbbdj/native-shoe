import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  productScreenContainer: {
    marginTop: 10,
    marginBottom: 60,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  smallerImage: {
    width: screenWidth,
    aspectRatio: 1,
  },
  flatList: {},
  contentContainer: {
    padding: 20,
  },
});

export default styles;
