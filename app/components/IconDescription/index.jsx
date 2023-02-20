import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
const IconDescription = ({ icon, description, type }) => {
  const containerHandler = (type) => {
    switch (type) {
      case "default":
      default:
        return styles.iconDescription;
    }
  };

  const iconHandler = () => {
    switch (type) {
      case "default":
      default:
        return styles.iconHandler;
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
