import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const RadioButton = ({ colored }) => {
  const handlePress = () => {
    setOnRadio((prev) => !prev);
  };
  const [onRadio, setOnRadio] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress();
      }}
      style={[
        {
          height: 26,
          width: 26,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 5,
        },
      ]}
    >
      {onRadio ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 3,
            backgroundColor: colored === "default" ? "black" : colored,
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default RadioButton;
