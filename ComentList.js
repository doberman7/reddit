import React, { useState, useEffect } from "react";
import Votes from "./Votes";
import { List, Avatar, Card } from "antd";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Spin, Alert } from "antd";
import { Link } from "react-router-dom";

const ComentList = (props) => {
  const [datos, setDatos] = useState(null);

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
  // if (datos) datos.map((d) => console.log(d.data.id));
  return datos ? (
    <>
      <List
        itemLayout="vertical"
        dataSource={datos}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.data.thumbnail} />}
              title={
                <>
                  <Link
                    to={`/detail/${item.data.id}`}
                    // props={`https://www.reddit.com${item.data.permalink}.json`}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      {item.data.title}
                    </Text>
                  </Link>
                </>
              }
              key={item.data.id}
              description={
                <>
                  {item.data.subreddit_name_prefixed}

                  <Text>
                    {" "}
                    posted by {item.data.author}, coments
                    {" " + item.data.num_comments}
                  </Text>
                  <Votes ups={item.data.ups} />
                </>
              }
            />
            <View style={styles.container}>
              <Link to={`/detail/${item.data.id}`}>
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
              </Link>
            </View>
          </List.Item>
        )}
      />
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
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center" /* align horizontal */,
    alignItems: "center" /* align vertical */,
  },
});
export default ComentList;
