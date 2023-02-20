import { View, Text, ScrollView } from "react-native";
import React from "react";
import products from "../../utils/products";
import Carousel from "./components/Carousel";
import Content from "./components/Content";

import styles from "./style";
const ProductDetails = () => {
  const product = products[0];

  return (
    <ScrollView style={styles.productScreenContainer}>
      <Carousel product={product} />

      <Content product={product} />

      {/*CTA button*/}
      {/*Navigation Icons*/}
    </ScrollView>
  );
};

export default ProductDetails;
