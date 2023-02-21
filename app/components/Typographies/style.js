import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 35,
  },
  productTitle: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 27,
  },

  price: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
  },
  default: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
  },
});

export default styles;
