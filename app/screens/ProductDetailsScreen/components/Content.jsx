import { View, ScrollView } from "react-native";
import React from "react";
import Typographies from "../../../components/Typographies";
import styles from "../style";
import IconDescription from "../../../components/IconDescription";
const Content = ({ product }) => {
  return (
    <View style={styles.contentContainer}>
      <IconDescription
        type="titlePrice"
        icon={<Typographies type="title" text={product.name} />}
        description={<Typographies type="price" text={`$${product.price}`} />}
      />
      <Typographies type="default" text={product.description} />
    </View>
  );
};

export default Content;
