import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
const IconDescription = ({ icon, description, type }) => {
  const containerHandler = () => {
    switch (type) {
      case "titlePrice":
        return styles.titlePrice;
      case "defaultType":
        return styles.iconDescription;
      default:
        return "";
    }
  };

  const iconHandler = () => {
    switch (type) {
      case "titlePrice":
        return styles.titlePriceIcon;
      case "defaultType":
        return styles.iconHandler;
      default:
        return "";
    }
  };

  return (
    <View style={containerHandler()}>
      <View style={iconHandler()}>{icon}</View>
      {description}
    </View>
  );
};

export default IconDescription;
