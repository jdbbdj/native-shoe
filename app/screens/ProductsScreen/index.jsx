import { View, Text } from "react-native";
import React from "react";
import Products from "../../components/Products";
import HeaderSort from "../../components/HeaderSort";
const ProductsScreen = () => {
  return (
    <View>
      <HeaderSort />
      <Products />
    </View>
  );
};

export default ProductsScreen;
