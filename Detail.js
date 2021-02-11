import React, { useState, useEffect } from "react";
import { Comment, Avatar, Image } from "antd";
import { List } from "antd";

const Detail = ({
  match: {
    params: { id },
  },
}) => {
  // props={`https://www.reddit.com${item.data.permalink}.json`}
  const [datos, setDatos] = useState(null);

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
  //this children its not the one above, but change the name breaks the fx
  const ExampleComment = ({ children, title }) => (
    <Comment
      // actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={title}
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
          {/* {typeof datos} */}
        </p>
      }
    >
      {children}
    </Comment>
  );
  //
  // if (datos) datos.map((item) => console.log(item.data.children[0].data.title));
  return datos ? (
    <>
      <p>Datos</p>

      <ExampleComment
        title={datos[0].data.children[0].data.title}
        key={datos[0].data.children[0].data.id}
      >
        <Image width={200} src={datos[0].data.children[0].data.url} />
        <ExampleComment />
      </ExampleComment>
    </>
  ) : (
    <p>cargando</p>
  );
};

export default Detail;
