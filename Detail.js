import React, { useState, useEffect } from "react";
import { Comment, Avatar } from "antd";

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
        console.log(res);
        const arayResponse = await res.json();

        setDatos([...arayResponse]);
      } catch (e) {
        console.log(e);
      }
    };
    data();
  }, []);
  //this children its not the one above, but change the name breaks the fx
  const ExampleComment = ({ children, datos }) => (
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
          {/* {typeof datos} */}
        </p>
      }
    >
      {children}
    </Comment>
  );
  //
  if (datos) datos.map((item) => console.log(item.data.children));
  return datos ? (
    <>
      {/* {datos ? console.log(typeof datos.data) : null} */}
      <ExampleComment datos={datos}>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
    </>
  ) : (
    <p>cargando</p>
  );
};

export default Detail;
