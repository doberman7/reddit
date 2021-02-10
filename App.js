// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";
import "antd/dist/antd.css";
import { List, Avatar, Card } from "antd";
import { Spin, Alert } from "antd";

import Detail from "./Votes";
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
                  <a
                    href={`https://www.reddit.com${item.data.permalink}+.json`}
                  >
                    {item.data.title}
                  </a>
                </>
              }
              key={item.data.id}
              description={
                <>
                  {item.data.subreddit_name_prefixed}
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
                style={{ width: 200 }}
                cover={
                  <img
                    alt="image not found"
                    src={item.data.url_overridden_by_dest}
                  />
                }
              >
                {/* <Meta
                // title="Europe Street beat"
                // description={<p>posted by {item.data.author}</p>}
                /> */}
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
        message="One second"
        description="Patience is not the ability to wait, but the ability to keep a good attitude while waiting."
        type="info"
      />
    </Spin>
  );
}
