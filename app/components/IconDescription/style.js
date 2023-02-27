import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  titlePrice: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  avatarStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },
  iconDescription: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  descriptionIcon: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  iconHandler: {
    marginHorizontal: 10,
  },
  titlePriceIcon: {
    marginRight: 20,
  },
});

export default styles;
