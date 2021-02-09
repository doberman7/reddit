// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";
import "antd/dist/antd.css";
import { List, Avatar, Card } from "antd";
import { Spin, Alert } from "antd";

import Detail from "./Detail";
export default function App() {
  const [datos, setDatos] = useState(null);
  const { Meta } = Card;

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch("https://www.reddit.com/r/all.json");
        const arayResponse = await res.json();
        const { data } = arayResponse;
        const { children } = data;
        setDatos(children);
      } catch (e) {
        console.log(e);
      }
    };
    data();
  }, []);

  // console.log(datos);
  return datos ? (
    <>
      <h1>Reddit Clone</h1>
      <List
        itemLayout="vertical"
        dataSource={datos}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.data.thumbnail} />}
              title={
                <>
                  <a href="">{item.data.title}</a>
                </>
              }
              key={item.data.id}
              description={
                <>
                  /r {item.data.subreddit}
                  <br />
                  <p>
                    posted by {item.data.author}, coments
                    {" " + item.data.num_comments}
                  </p>
                  <Detail ups={item.data.ups} />
                </>
              }
            />
            <div style={{ width: "50%", margin: "0 auto" }}>
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<img alt="image" src={item.data.url} />}
              >
                <Meta
                // title="Europe Street beat"
                // description={<p>posted by {item.data.author}</p>}
                />
              </Card>
            </div>
          </List.Item>
        )}
      />
      ,
    </>
  ) : (
    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  );
}
