import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
const Product = ({ data }) => {
  return (
    <View style={styles.product}>
      <Image source={{ uri: data?.image }} style={styles.image} />
    </View>
  );
};

export default Product;
