import { ScrollView, View } from "react-native";
import React from "react";
import products from "../../utils/products";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import styles from "./style";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
const ProductDetails = ({ navigation }) => {
  const selected = useSelector((state) => state.products.selectedProduct);
  const product = selected;

  const handleAddToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View>
      <ScrollView style={styles.productScreenContainer}>
        <Carousel product={product} />

        <Content product={product} />

        {/*Navigation Icons*/}
      </ScrollView>
      {/*CTA button*/}
      <Button
        type="default"
        handlePress={() => handleAddToCart()}
        text={"ADD TO CART"}
      />
    </View>
  );
};

export default ProductDetails;
