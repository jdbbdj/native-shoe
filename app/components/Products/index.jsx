import { View, FlatList } from "react-native";
import React from "react";
import Product from "./Product";
import styles from "./style";
import Global from "../../GlobalStyling";
import { useDispatch } from "react-redux";
import { productsSlice } from "../../redux/store/productsSlice";

const Products = ({ products, navigation }) => {
  const dispatch = useDispatch();
  const onHandlePress = (id) => {
    dispatch(productsSlice.actions.setSelectedProduct(id));
    navigation.navigate("Product Details");
  };
  return (
    <FlatList
      style={[styles.productsContainer, Global.globalMarginHorizontal]}
      data={products}
      renderItem={({ item }) => {
        return <Product data={item} onHandlePress={onHandlePress} />;
      }}
      numColumns={2}
    />
  );
};

export default Products;
