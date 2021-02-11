import React, { useState, useEffect } from "react";
import { Comment, Avatar, Image } from "antd";

const Detail = ({
  match: {
    params: { id },
  },
}) => {
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
  //this children its not the one inside datos[0].data.children... , but change the name breaks the fx
  const ExampleComment = ({ children, title, text, avatar }) => (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={"Posted by " + title}
      avatar={<Avatar src={avatar} alt="image not found" />}
      content={text}
    >
      {children}
    </Comment>
  );

  return datos ? (
    <>
      <p>Datos</p>

      <ExampleComment
        title={datos[0].data.children[0].data.author}
        key={datos[0].data.children[0].data.id}
        text={datos[0].data.children[0].data.title}
        avatar={datos[0].data.children[0].data.thumbnail}
      >
        <Image width={200} src={datos[0].data.children[0].data.url} />
        {datos[1].data.children.map((item) => (
          <ExampleComment
            title={item.data.author}
            key={item.data.id}
            text={item.data.body}
            avatar={item.data.thumbnail}
          />
        ))}
      </ExampleComment>
    </>
  ) : (
    <p>cargando</p>
  );
};

export default Detail;
