import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";

export default function App() {
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
  return datos ? (
    <>
      <h1>Reddit Clone</h1>
      <List
        itemLayout="horizontal"
        dataSource={datos}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.data.title}</a>}
              key={item.data.id}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      ,
    </>
  ) : (
    <p>cargando..∫</p>
  );
}
