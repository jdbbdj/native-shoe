import { View, FlatList } from "react-native";
import React from "react";
import Product from "./Product";
import styles from "./style";
import Global from "../../GlobalStyling";
const Products = ({ products }) => {
  return (
    <FlatList
      style={[styles.productsContainer, Global.globalMarginHorizontal]}
      data={products}
      renderItem={({ item }) => {
        return <Product data={item} />;
      }}
      numColumns={2}
    />
  );
};

export default Products;
