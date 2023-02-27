import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetails from "../screens/ProductDetailsScreen";

const navs = [
  {
    name: "Products",
    component: ProductsScreen,
    options: {
      headerShown: true,
      presentation: "modal",
      animationTypeForReplace: "push",
      animation: "slide_from_right",
    },
  },
  {
    name: "Cart",
    component: CartScreen,
    options: {
      headerShown: true,
      presentation: "modal",
      animationTypeForReplace: "push",
      animation: "slide_from_right",
    },
  },
  {
    name: "Product Details",
    component: ProductDetails,
    options: {
      headerShown: true,
      presentation: "modal",
      animationTypeForReplace: "push",
      animation: "slide_from_right",
    },
  },
];

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        {navs.map((nav) => {
          return (
            <Stack.Screen
              name={nav.name}
              component={nav.component}
              options={nav.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
