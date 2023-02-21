import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import cart from "../../utils/cart";
import Cart from "../../components/Cart";
import styles from "./style";
const CartScreen = () => {
  return (
    <View style={styles.cartScreenContainer}>
      <FlatList data={cart} renderItem={({ item }) => <Cart data={item} />} />
    </View>
  );
};

export default CartScreen;
