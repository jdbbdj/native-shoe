import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import IconDescription from "../IconDescription";
const HeaderSort = () => {
  return (
    <View style={styles.headerContainer}>
      <IconDescription
        type={"default"}
        icon={<Text>HeaderSort</Text>}
        description={<Text>HeaderSort</Text>}
      />
    </View>
  );
};

export default HeaderSort;
