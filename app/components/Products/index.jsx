import { View, FlatList } from "react-native";
import React from "react";
import products from "../../utils/products";
import Product from "./Product";
import styles from "./style";
const Products = () => {
  return (
    <FlatList
      style={styles.productsContainer}
      data={products}
      renderItem={({ item }) => {
        return <Product data={item} />;
      }}
      numColumns={2}
    />
  );
};

export default Products;
