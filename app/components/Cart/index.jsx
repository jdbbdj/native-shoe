import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import styles from "./style";
import Typographies from "../Typographies";
import Global from "../../GlobalStyling";

const Cart = ({ data, addQuantity, decreaseQuantity }) => {
  return (
    <View style={Global.shadowMotherContainer}>
      <View style={[styles.cartWithShadow, Global.shadowChildElevated]}>
        <Image source={{ uri: data?.product.image }} style={styles.image} />
        <View style={styles.middleSection}>
          <View>
            <Typographies type="product-title" text={`${data?.product.name}`} />
            <Typographies type="default" text={`Sizes: ${data?.size}`} />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                decreaseQuantity(data);
              }}
            >
              <Feather name="minus-circle" size={24} color={"rgb(35,35,35)"} />
            </TouchableOpacity>

            <Typographies type="default" text={`${data?.quantity}`} />

            <TouchableOpacity
              onPress={() => {
                addQuantity(data);
              }}
            >
              <Feather name="plus-circle" size={24} color={`rgb(35,35,35)`} />
            </TouchableOpacity>
          </View>
        </View>
        <Typographies
          style={{ alignSelf: "flex-end" }}
          type="price"
          text={`$${data.product.price}`}
        />
      </View>
    </View>
  );
};

export default Cart;
