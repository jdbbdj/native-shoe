import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Global from "../../../GlobalStyling";
const Product = ({ data, onHandlePress }) => {
  return (
    <TouchableOpacity
      key={data.id}
      style={[styles.product, Global.shadowMotherContainer]}
      onPress={() => onHandlePress(data.id)}
    >
      <View style={Global.shadowChildElevated}>
        <Image source={{ uri: data?.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default Product;
