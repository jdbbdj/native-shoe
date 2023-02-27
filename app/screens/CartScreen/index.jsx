import { View, FlatList } from "react-native";
import React, { useState } from "react";

import Cart from "../../components/Cart";
import styles from "./style";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
const CartScreen = () => {
  const carts = useSelector((state) => state.carts.carts);
  console.log(carts);
  const addQuantity = () => {
    console.log("ADD");
  };
  const decreaseQuantity = () => {
    console.log("MINUS");
  };

  return (
    <>
      <View style={styles.cartScreenContainer}>
        <FlatList
          data={carts}
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
      <Button type="default" text="CHECKOUT" />
    </>
  );
};

export default CartScreen;
