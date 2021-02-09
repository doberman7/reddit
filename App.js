import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const data = async () => {
  try {
    const res = await fetch("https://www.reddit.com/r/all.json");
    //https://www.reddit.com/r/aww/comments/80o0xo/puppy_spends_a_day_at_the_beach/
    const arayResponse = await res.json();
    const { data } = arayResponse;
    const { children } = data;
    children.map((item) => {
      console.log(item.data.subreddit);
    });

    return arayResponse;
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
