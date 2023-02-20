import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import IconDescription from "../IconDescription";
import Icon from "react-native-vector-icons/Ionicons";
const HeaderSort = () => {
  return (
    <View style={styles.headerContainer}>
      <IconDescription
        type={"defaultType"}
        icon={<Icon name="options-outline" size={30} color="#000000" />}
        description={<Text>HeaderSort</Text>}
      />
    </View>
  );
};

export default HeaderSort;
