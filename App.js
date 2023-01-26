import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./compoenets/Home";

export default function App() {
  const [name, setName] = useState("");
  const [confrim, setConfrim] = useState(false);
  const handleInput = (e) => {
    setName(e.nativeEvent.text);
  };
  return (
    <View style={styles.app}>
      <Home />
      <Image style={styles.logo} source={require("./image/manbal.jpg")} />
      <Image
        style={styles.logo}
        source={{
          uri: "https://img.freepik.com/premium-vector/ancient-maze-geometric-antique-logo-vector-symbol_151157-1626.jpg?w=2000",
        }}
      />
      <Text>{confrim && name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Write Your Name"
        onChange={handleInput}
      />
      <Button title="Confrim" onPress={() => setConfrim(true)}/>
      <Button title="Clear" onPress={() => setConfrim(false)} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 50,
    width: "100px",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});
