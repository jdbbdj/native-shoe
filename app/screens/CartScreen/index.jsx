import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import cart from "../../utils/cart";
import Cart from "../../components/Cart";
import styles from "./style";
import Typographies from "../../components/Typographies";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
const CartScreen = () => {
  const addQuantity = () => {
    console.log("ADD");
  };
  const decreaseQuantity = () => {
    console.log("MINUS");
  };
  console.log(cart);
  return (
    <View style={styles.cartScreenContainer}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <Cart
            data={item}
            addQuantity={addQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        )}
        ListHeaderComponent={() => <CartHeader />}
        ListFooterComponent={() => <CartFooter />}
      />
    </View>
  );
};

export default CartScreen;
