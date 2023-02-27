import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import IconDescription from "../IconDescription";
import Icon from "react-native-vector-icons/Ionicons";
import Global from "../../GlobalStyling";
import cart from "../../utils/cart";

const HeaderSort = () => {
  return (
    <View style={[styles.headerContainer, Global.defaultborderWithShadow]}>
      <IconDescription
        type={"avatarType"}
        icon={<Icon name="options-outline" size={30} color="#000000" />}
        description={<Text>HeaderSort</Text>}
        avatar={cart[0].product.image}
      />
    </View>
  );
};

export default HeaderSort;
