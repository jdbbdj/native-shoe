import { View, Text, Image, Pressable, Feath } from "react-native";
import Feather from "@expo/vector-icons";
import React, { useState } from "react";
import styles from "./style";
import Typographies from "../Typographies";
const Cart = ({ data }) => {
  console.log(data.product.image);
  return (
    <View style={styles.cart}>
      <Image source={{ uri: data.product.image }} style={styles.image} />
      <View style={styles.middleSection}>
        <View style={styles.buttons}>
          <Feather name="minus-circle" size={24} color={`rgb(35,35,35)`} />
          <Typographies type="default" text={`${data.quantity}`} />
          <Feather name="plus-circle" size={24} color={`rgb(35,35,35)`} />
        </View>
        <Typographies type="product-title" text={`${data.product.name}`} />
        <Typographies type="default" text={`Size: ${data.size}`} />
      </View>
      <Typographies type="price" text={`$${data.product.price}`} />
    </View>
  );
};

export default Cart;
