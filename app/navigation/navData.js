import { Pressable } from "react-native";

import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetails from "../screens/ProductDetailsScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Typographies from "../components/Typographies";
import Global from "../GlobalStyling";

export const navs = [
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
