// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import Anime from "@mollycule/react-anime";

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
        <section>
          <Text h2>Reddit Clone</Text>
        </section>
      </Anime>
      <ComentList />
    </>
  );
}
