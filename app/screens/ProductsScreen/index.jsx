import { View, Text } from "react-native";
import React from "react";
import Products from "../../components/Products";
import HeaderSort from "../../components/HeaderSort";
import products from "../../utils/products";
const ProductsScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderSort />
      <Products products={products} navigation={navigation} />
    </View>
  );
};

export default ProductsScreen;
