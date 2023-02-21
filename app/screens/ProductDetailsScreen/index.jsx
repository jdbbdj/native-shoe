import { ScrollView, View } from "react-native";
import React from "react";
import products from "../../utils/products";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import styles from "./style";
import Button from "../../components/Button";

const ProductDetails = () => {
  const product = products[0];

  return (
    <View>
      <ScrollView style={styles.productScreenContainer}>
        <Carousel product={product} />

        <Content product={product} />

        {/*Navigation Icons*/}
      </ScrollView>
      {/*CTA button*/}
      <Button type="default" text={"ADD TO CART"} />
    </View>
  );
};

export default ProductDetails;
