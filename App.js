import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ProductsScreen from "./app/screens/ProductsScreen";
export default function App() {
  return (
    <View>
      <StatusBar />
      <ProductsScreen />
    </View>
  );
}
