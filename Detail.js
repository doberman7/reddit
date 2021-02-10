import React, { useState, useEffect } from "react";
import { Comment, Avatar } from "antd";

const Detail = (props) => {
  const comentUrl = JSON.parse(JSON.stringify(props.props));
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch(comentUrl);

        const arayResponse = await res.json();
        setDatos(arayResponse);
      } catch (e) {
        console.log(e);
      }
    };
    data();
  }, []);
  console.log(datos);
  //this children its not the one above, but change the name breaks the fx
  const ExampleComment = ({ children }) => (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure).
        </p>
      }
    >
      {children}
    </Comment>
  );

  return (
    <>
      <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
    </>
  );
};

export default Detail;
