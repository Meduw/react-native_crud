import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigations from "./navigation/AppNavigations";
import ProductsContextProvider from "./contexts/productsContext";

export default function App() {
  return (
    <ProductsContextProvider>
      <AppNavigations />
    </ProductsContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
