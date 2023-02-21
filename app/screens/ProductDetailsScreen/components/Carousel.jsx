import { View, Image, FlatList } from "react-native";
import React from "react";
import styles from "../style";
const Carousel = ({ product }) => {
  return (
    <View>
      <FlatList
        style={styles.flatList}
        data={product.images}
        renderItem={({ item, key }) => (
          <Image style={styles.smallerImage} source={{ uri: item }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Carousel;
