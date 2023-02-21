import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./style";

const Button = ({ type, text }) => {
  const [timesPressed, setTimesPressed] = useState(0);

  const buttonStyleHandler = () => {
    switch (type) {
      default:
        return styles.buttonDefault;
    }
  };
  const typeHandler = () => {
    switch (type) {
      default:
        return styles.default;
    }
  };

  const handleButton = () => {
    setTimesPressed((current) => current + 1);
  };
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(30, 30, 30)" : "white",
        },
        buttonStyleHandler(),
      ]}
      onPress={() => {
        handleButton();
      }}
    >
      {({ pressed }) => (
        <Text
          style={[
            pressed ? styles.pressedText : styles.defaultColor,
            typeHandler(),
          ]}
        >
          {"ADD TO CART"}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
