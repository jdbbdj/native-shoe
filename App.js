import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ProductDetails from "./app/screens/ProductDetailsScreen";
import ProductsScreen from "./app/screens/ProductsScreen";

export default function App() {
  return (
    <View>
      <StatusBar />
      <ProductDetails />
    </View>
  );
}
