import React, { useState, useEffect } from "react";
import { Comment, Avatar, Image } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import ShowIt from "./ShowIt";
import Votes from "./Votes";
import { Spin, Alert } from "antd";

const Detail = ({
  match: {
    params: { id },
  },
}) => {
  const [datos, setDatos] = useState(null);
  const [fotos, setFotos] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch(`https://www.reddit.com/${id}.json`);

        const resPics = await fetch(`https://randomuser.me/api/?results=50`);

        const arayResponse = await res.json();
        const pics = await resPics.json();

        setDatos([...arayResponse]);
        setFotos(pics);
      } catch (e) {
        console.log(e);
      }
    };
    data();
  }, []);
  //this children its not the one inside datos[0].data.children... , but change the name breaks the fx
  const ExampleComment = ({ children, title, text, avatar, votes }) => (
    <Comment
      actions={[
        <span key="comment-nested-reply-to">
          <Votes ups={votes} />
          <ShowIt />
        </span>,
      ]}
      author={"Posted by " + title}
      avatar={<Avatar src={avatar} alt="image not found" />}
      content={text}
    >
      {children}
    </Comment>
  );

  const handleFotos = () => {
    let num = Math.floor(Math.random() * (50 - 1)) + 1;

    if (fotos) return fotos.results[num].picture.thumbnail;
  };

  return datos ? (
    <>
      <Link to={`/`}>
        <HomeOutlined
          style={{ fontSize: "16px", color: "#08c", size: "12px" }}
        />
      </Link>
      <h4>Details</h4>
      <ExampleComment
        title={datos[0].data.children[0].data.author}
        key={datos[0].data.children[0].data.id}
        text={datos[0].data.children[0].data.title}
        avatar={datos[0].data.children[0].data.thumbnail}
        votes={datos[0].data.children[0].data.ups}
      >
        <Image width={200} src={datos[0].data.children[0].data.url} />
        {datos[1].data.children.map((item) => (
          <ExampleComment
            title={item.data.author}
            key={item.data.id}
            text={item.data.body}
            avatar={handleFotos()}
            votes={item.data.ups}
          />
        ))}
      </ExampleComment>
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

export default Detail;
