import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ProductDetails from "./app/screens/ProductDetailsScreen";
import ProductsScreen from "./app/screens/ProductsScreen";
import CartScreen from "./app/screens/CartScreen";

export default function App() {
  return (
    <View>
      <StatusBar />
      <ProductsScreen />
    </View>
  );
}
