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
  },
  {
    name: "Cart",
    component: CartScreen,
  },
  {
    name: "Product Details",
    component: ProductDetails,
  },
];

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        {navs.map((nav) => {
          return <Stack.Screen name={nav.name} component={nav.component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
