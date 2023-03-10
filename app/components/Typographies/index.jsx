import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

const Typographies = ({ type, text, style }) => {
  const typeHandler = () => {
    switch (type) {
      case "title":
        return styles.title;
      case "product-title":
        return styles.productTitle;
      case "price":
        return styles.price;
      default:
        return styles.default;
    }
  };
  return (
    <View style={{ ...style }}>
      <Text style={typeHandler()}>{text}</Text>
    </View>
  );
};

export default Typographies;
