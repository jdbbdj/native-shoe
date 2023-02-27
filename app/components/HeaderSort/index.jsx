import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import IconDescription from "../IconDescription";
import Icon from "react-native-vector-icons/Ionicons";
import Global from "../../GlobalStyling";
import cart from "../../utils/cart";

const dataIndex = [
  {
    id: 0,
    icon: <Icon name="options-outline" size={30} color="rgb(35,35,35)" />,
    text: "Sort",
  },
  {
    id: 1,
    icon: <Icon name="search-outline" size={30} color="rgb(35,35,35)" />,
    text: "Advance Search",
  },
];

const HeaderSort = () => {
  const [index, setIndex] = useState(0);
  const [header, setHeader] = useState(dataIndex[index]);
  const onhandlePress = (header) => {
    setHeader(dataIndex[header.id === 0 ? 1 : 0]);
    setIndex(header.id === 0 ? 1 : 0);
  };

  console.log(header);
  return (
    <View
      style={[
        styles.headerContainer,
        Global.defaultborderWithShadow,
        index === 1 && Global.globalAdvancedSearchMarginBottom,
      ]}
    >
      <IconDescription
        type={index === 0 ? "avatarType" : "avatarFlexStartType"}
        icon={
          <TouchableOpacity onPress={() => onhandlePress(header)}>
            {header.icon}
          </TouchableOpacity>
        }
        description={<Text>{header.text}</Text>}
        avatar={cart[0].product.image}
      />
    </View>
  );
};

export default HeaderSort;
