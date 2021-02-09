import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let subreddits = [];
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch("https://www.reddit.com/r/all.json");
        const arayResponse = await res.json();
        const { data } = arayResponse;
        const { children } = data;
        setDatos(children);
        // children.map((item) => {
        //   // console.log(item.data);
        //   subreddits.push(item.data);
        // });
      } catch (e) {
        console.log(e);
      }
    };
    data();
  }, []);

  console.log(datos);
  return (
    <View style={styles.container}>
      <Text>Reddit Clone</Text>
      {datos ? <p>{datos.length}</p> : null}
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
