import { View, Image, Text, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import styles from "./style";
import Global from "../../GlobalStyling";
import RadioButton from "../RadioButton";
const IconDescription = ({ icon, description, type, avatar, styled }) => {
  const containerHandler = () => {
    switch (type) {
      case "titlePrice":
        return styles.titlePrice;
      case "avatarFlexStartType":
        return styles.avatarFlexStartType;
      case "avatarType":
        return styles.avatarStyle;
      case "footerFlexEnd":
        return styles.footerFlexEnd;
      case "defaultType":
        return styles.iconDescription;
      default:
        return "";
    }
  };

  const iconHandler = () => {
    switch (type) {
      case "titlePrice":
        return styles.titlePriceIcon;
      case "footerFlexEnd":
        return styles.footerIconHandler;
      case "avatarType":
      case "avatarFlexStartType":
      case "defaultType":
        return styles.iconHandler;
      default:
        return "";
    }
  };

  const Row = ({ children, styled }) => (
    <View style={[{ flexDirection: "row", ...styled }]}>{children}</View>
  );

  const Column = ({ children, styled }) => (
    <View style={{ flexDirection: "column", ...styled }}>{children}</View>
  );

  const Grid = ({ children, styled }) => (
    <View
      style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, ...styled }}
    >
      {children}
    </View>
  );
  const handlePress = () => {
    setOnRadio((prev) => !prev);
  };

  return (
    <View style={[containerHandler(), { ...styled }]}>
      <View
        style={[
          styles.row,
          (type === "avatarFlexStartType" || type === "footerFlexEnd") &&
            styles.justify,
          (type === "avatarFlexStartType" || type === "footerFlexEnd") &&
            styles.rowWidth,
        ]}
      >
        <View style={iconHandler()}>{icon}</View>
        {description}

        {type === "avatarFlexStartType" && (
          <View style={Global.iconAvatar}>
            <Image source={{ uri: avatar }} style={Global.defaultImage} />
          </View>
        )}
      </View>
      {type === "avatarType" && (
        <View style={Global.iconAvatar}>
          <Image source={{ uri: avatar }} style={Global.defaultImage} />
        </View>
      )}
      {type === "avatarFlexStartType" && (
        <Grid styled={Global.shadowMotherContainer}>
          <Row>
            <Column>
              <Text>Color: </Text>
            </Column>
            <RadioButton colored={"red"} />
            <RadioButton colored={"blue"} />
            <RadioButton colored={"black"} />
          </Row>
        </Grid>
      )}
    </View>
  );
};

export default IconDescription;
