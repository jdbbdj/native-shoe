import { View, Text } from "react-native";
import React from "react";
import Products from "../../components/Products";
import HeaderSort from "../../components/HeaderSort";

import { useSelector } from "react-redux";
const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);

  return (
    <View>
      <HeaderSort />
      <Products products={products} navigation={navigation} />
    </View>
  );
};

export default ProductsScreen;
