import { View, FlatList } from "react-native";
import React, { useState } from "react";

import Cart from "../../components/Cart";
import styles from "./style";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import Button from "../../components/Button";

import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../../redux/store/cartSlice";

const CartScreen = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts.carts);
  const delivery = useSelector((state) => state.carts.deliveryFee);
  const freeDelivery = useSelector((state) => state.carts.freeDelivery);
  const cartsSubTotal = useSelector((state) =>
    state.carts.carts.reduce(
      (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
      0
    )
  );

  const addQuantity = (data) => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productID: data.product.id,
        amount: 1,
      })
    );
  };
  const decreaseQuantity = (data) => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productID: data.product.id,
        amount: -1,
      })
    );
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
          ListFooterComponent={() => (
            <CartFooter
              subtotal={cartsSubTotal}
              freeDelivery={freeDelivery}
              delivery={delivery}
            />
          )}
        />
      </View>
      <Button type="default" text="CHECKOUT" />
    </>
  );
};

export default CartScreen;
