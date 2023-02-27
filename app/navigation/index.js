import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Pressable, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { navs } from "./navData";
import Global from "../GlobalStyling";
import Typographies from "../components/Typographies";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();
const Navigation = () => {
  const cart = useSelector((state) => state.carts.carts);
  const cartNumber = cart.length;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        {navs.map((nav) => {
          return (
            <Stack.Screen
              key={nav.name}
              name={nav.name}
              component={nav.component}
              options={({ route, navigation }) => ({
                ...nav.options,
                headerRight: () =>
                  nav.name === "Products" && (
                    <Pressable
                      onPress={() => {
                        navigation.navigate("Cart");
                      }}
                      style={Global.row}
                    >
                      <MaterialCommunityIcons
                        name="cart-minus"
                        size={30}
                        color="#000000"
                      />
                      <Typographies type="default" text={cartNumber} />
                    </Pressable>
                  ),
              })}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
