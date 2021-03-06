// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native-elements";
import Anime from "@mollycule/react-anime";
import RedditIcon from "./RedditIcon";
import "antd/dist/antd.css";

import ComentList from "./ComentList";

export default function App() {
  return (
    <>
      <Anime
        in
        appear
        duration={1000}
        onEntering={{ translateY: [-20, 0], opacity: [0, 1] }}
        onExiting={{ translateY: -20, opacity: 0 }}
        easing="easeOutCubic"
      >
        <section style={{ display: "flex" }}>
          <RedditIcon />
          <Text
            style={{
              fontWeight: "200",
              fontSize: "2.8em",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              padding: ".5em",
            }}
          >
            Reddit Clone
          </Text>
        </section>
      </Anime>
      <ComentList />
    </>
  );
}
