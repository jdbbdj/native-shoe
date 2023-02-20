import { View, Text } from "react-native";
import React from "react";
import Products from "../../components/Products";
import HeaderSort from "../../components/HeaderSort";
import products from "../../utils/products";
const ProductsScreen = () => {
  return (
    <View>
      <HeaderSort />
      <Products products={products} />
    </View>
  );
};

export default ProductsScreen;
