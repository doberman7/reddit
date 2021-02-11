import React, { useState, useEffect } from "react";
import { Comment, Avatar, Image } from "antd";
import Replys from "./Replys";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import Likes from "./Likes";
import Votes from "./Votes";

const Detail = ({
  match: {
    params: { id },
  },
}) => {
  const [datos, setDatos] = useState(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch(`https://www.reddit.com/${id}.json`);
        const arayResponse = await res.json();

        setDatos([...arayResponse]);
      } catch (e) {
        console.log(e);
      }
    };
    data();
  }, []);

  function Reply(props) {
    return (
      <div>
        <h2>
          {" "}
          <Replys />
          {props.a}
        </h2>
      </div>
    );
  }
  function Imagen(props) {
    return (
      <div>
        <h2> {props.h}</h2>
      </div>
    );
  }
  //this children its not the one inside datos[0].data.children... , but change the name breaks the fx
  const ExampleComment = ({ children, title, text, avatar, votes }) => (
    <Comment
      actions={[
        <span key="comment-nested-reply-to">
          <a href="#" onClick={() => setFlag(!flag)}>
            Reply to
          </a>
          <Votes ups={votes} />
          {flag ? <Reply a={flag} /> : <Imagen h={flag} />}
        </span>,
      ]}
      author={"Posted by " + title}
      avatar={<Avatar src={avatar} alt="image not found" />}
      content={text}
    >
      {children}
    </Comment>
  );
  const ReplyComment = ({ children, title, text, avatar, votes }) => (
    <Comment
      actions={[
        <span key="comment-nested-reply-to">
          <a href="#" onClick={() => setFlag(!flag)}>
            Reply to
          </a>
          <Votes ups={votes} />
          {flag ? <Reply a={flag} /> : <Imagen h={flag} />}
        </span>,
      ]}
      author={"Posted by " + title}
      avatar={<Avatar src={avatar} alt="image not found" />}
      content={text}
    >
      {children}
    </Comment>
  );

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
            avatar={item.data.thumbnail}
            votes={item.data.ups}
          />
        ))}
      </ExampleComment>
    </>
  ) : (
    <p>cargando</p>
  );
};

export default Detail;
