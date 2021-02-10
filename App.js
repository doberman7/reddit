// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import "antd/dist/antd.css";
import { List, Avatar, Card } from "antd";
import { Spin, Alert } from "antd";
import { Modal, Button } from "antd";

import Votes from "./Votes";
import Detail from "./Detail";
export default function App() {
  const [datos, setDatos] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch("https://www.reddit.com/r/all.json");
        const arayResponse = await res.json();
        const { data } = arayResponse;
        const { children } = data;
        // console.log(children);
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
                  {/* <a
                    href={`https://www.reddit.com${item.data.permalink}+.json`}
                  > */}
                  <Button type="text" onClick={showModal}>
                    <h3>{item.data.title}</h3>
                  </Button>
                  <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Detail
                      props={`https://www.reddit.com${item.data.permalink}.json`}
                    />
                  </Modal>

                  {/* </a> */}
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
                  <Votes ups={item.data.ups} />
                </>
              }
            />
            <View style={styles.container}>
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="image not found"
                    src={item.data.url_overridden_by_dest}
                  />
                }
              ></Card>
            </View>
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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center" /* align horizontal */,
    alignItems: "center" /* align vertical */,
  },
});
