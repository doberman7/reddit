// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";

import "antd/dist/antd.css";

import ComentList from "./ComentList";

export default function App() {
  return (
    <>
      <Text h2>Reddit Clone</Text>
      <ComentList />
    </>
  );
}
