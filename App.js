import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const data = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const stuff = await response.json();
    console.log(stuff);
    return stuff;
  } catch (e) {}
};

data();
console.log("data");
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <p>app</p>
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
});
