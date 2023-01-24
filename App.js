import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.color}>
        Open up App.js to start working on your app testing!
      </Text>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  color: {
    color: "#fff",
    backgroundColor: "#606060",
    padding: "10px",
  },
});
