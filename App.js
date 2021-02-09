import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const data = async () => {
  try {
    const response = await fetch(
      "https://www.reddit.com/r/aww/comments/80o0xo/puppy_spends_a_day_at_the_beach.json"
    );
    //https://www.reddit.com/r/aww/comments/80o0xo/puppy_spends_a_day_at_the_beach/
    const stuff = await response.json();
    stuff.map((s) => console.log(s.data));
    return stuff;
  } catch (e) {
    console.log(e);
  }
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
