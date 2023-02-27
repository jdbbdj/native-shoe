import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import Navigation from "./app/navigation";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
