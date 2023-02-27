import { View, Text, Image, Pressable, Feath } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import styles from "./style";
import Typographies from "../Typographies";
import Global from "../../GlobalStyling";
const Cart = ({ data, addQuantity, decreaseQuantity }) => {
  const [timesPressed, setTimesPressed] = useState(0);

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
            <Feather
              onPress={() => {
                decreaseQuantity();
              }}
              name="minus-circle"
              size={24}
              color={"rgb(35,35,35)"}
            />
            <Typographies type="default" text={`${data?.quantity}`} />
            <Feather
              onPress={() => {
                addQuantity();
              }}
              name="plus-circle"
              size={24}
              color={`rgb(35,35,35)`}
            />
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
