import { ScrollView, View } from "react-native";
import React from "react";
import products from "../../utils/products";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import styles from "./style";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../../redux/store/cartSlice";

const ProductDetails = ({ navigation }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.products.selectedProduct);
  const product = selected;

  const handleAddToCart = () => {
    dispatch(cartSlice.actions.addToCart({ product }));
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
