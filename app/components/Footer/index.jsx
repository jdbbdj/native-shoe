import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import IconDescription from "../IconDescription";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";
import Typographies from "../Typographies";
import Global from "../../GlobalStyling";
const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <IconDescription
        styled={Global.marginVertical10}
        type={"footerFlexEnd"}
        icon={
          <View style={Global.row}>
            <FontAwesome5 name="money-check-alt" size={20} color="#000000" />
            <Typographies type="default" text="Subtotal: " />
          </View>
        }
        description={<Typographies type="default" text="$4900" />}
      />
      <IconDescription
        styled={Global.marginVertical10}
        type={"footerFlexEnd"}
        icon={
          <View style={Global.row}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={30}
              color="#000000"
            />
            <Typographies type="default" text="Delivery: " />
          </View>
        }
        description={<Typographies type="default" text="$100" />}
      />
      <IconDescription
        styled={Global.marginVertical10}
        type={"footerFlexEnd"}
        icon={
          <View style={Global.row}>
            <Icon name="wallet-outline" size={30} color="#000000" />
            <Typographies type="price" text="Total: " />
          </View>
        }
        description={<Typographies type="price" text="$5000" />}
      />
    </View>
  );
};

export default Footer;
