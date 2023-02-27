import { View, Image } from "react-native";
import React from "react";
import styles from "./style";
import Global from "../../GlobalStyling";
const IconDescription = ({ icon, description, type, avatar }) => {
  const containerHandler = () => {
    switch (type) {
      case "titlePrice":
        return styles.titlePrice;
      case "avatarType":
        return styles.avatarStyle;
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
      case "avatarType":
      case "defaultType":
        return styles.iconHandler;
      default:
        return "";
    }
  };

  return (
    <View style={containerHandler()}>
      <View style={styles.row}>
        <View style={iconHandler()}>{icon}</View>
        {description}
      </View>
      {type === "avatarType" && (
        <View style={Global.iconAvatar}>
          <Image source={{ uri: avatar }} style={Global.defaultImage} />
        </View>
      )}
    </View>
  );
};

export default IconDescription;
