import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import Global from "../../../GlobalStyling";
const Product = ({ data }) => {
  return (
    <View style={[styles.product, Global.shadowMotherContainer]}>
      <View style={Global.shadowChildElevated}>
        <Image source={{ uri: data?.image }} style={styles.image} />
      </View>
    </View>
  );
};

export default Product;
