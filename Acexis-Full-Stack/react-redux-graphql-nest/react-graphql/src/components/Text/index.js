import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useRef, useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  actionAddTextSuccess,
  actionGetTextSuccess,
} from "../../actions/index";
import useAddText from "../Text/CustomHook";
import useSubscript from "./useSub";

export const FEED_QUERY = gql`
  query {
    texting {
      content
      roomID
    }
  }
`;

function Text() {
  console.log("Render");

  const subRef = useRef("");

  const { loading, error, data } = useQuery(FEED_QUERY);

  const obj = useAddText();

  const sub = useSubscript();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (sub.data && subRef.current !== sub.data) {
    subRef.current = sub.data;
    data.texting.push(sub.data.textCreated);
  }

  /*if (obj.data) {
    data.texting.push(obj.data.createTexting);
  }*/

  const onClickAdd = () => {
    obj.addTodo({
      variables: {
        content: `Hello ${Math.random()}`,
        roomID: Number(document.querySelector("input").value),
      },
    });
  };

  return (
    <div>
      {data.texting.length > 0
        ? data.texting.map((record, index) => {
            return (
              <p key={index}>
                {record.content} - {record.roomID}
              </p>
            );
          })
        : ""}
      {obj.loading ? <div>Adding...</div> : ""}
      {obj.error ? <div>{obj.error.message}</div> : ""}
      <input type="number" />
      <button onClick={() => onClickAdd()}>Add</button>
    </div>
  );
}

export default Text;

/*function Text() {
  console.log("Render");

  const [text, setText] = useState([]);

  const { loading, error, data } = useQuery(FEED_QUERY);

  const obj = useAddText();

  useEffect(() => {
    if (data) {
      setText(data.texting);
    }
  }, [data]);

  useEffect(() => {
    if (obj.data) {
      setText([...text, obj.data.createTexting]);
    }
  }, [obj.data]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  const onClickAdd = () => {
    obj.addTodo({
      variables: {
        content: `Hello ${Math.random()}`,
        roomID: 0,
      },
    });
  };

  return (
    <div>
      {text.length > 0
        ? text.map((record, index) => {
            return (
              <p key={index}>
                {record.content} - {record.roomID}
              </p>
            );
          })
        : ""}
      {obj.loading ? <div>Adding...</div> : ""}
      {obj.error ? <div>{obj.error.message}</div> : ""}
      <button onClick={() => onClickAdd()}>Add</button>
    </div>
  );
}

export default Text;*/

/*import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  actionAddTextSuccess,
  actionGetTextSuccess,
} from "../../actions/index";
import useAddText from "../Text/CustomHook";

export const FEED_QUERY = gql`
  query {
    texting {
      content
      roomID
    }
  }
`;

function Text() {
  console.log("Render");

  const dataRef = useRef("");

  const textState = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(FEED_QUERY);

  const obj = useAddText();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (data && dataRef.current !== data) {
    dataRef.current = data;
    dispatch(actionGetTextSuccess(data.texting));
  }

  if (obj.data) {
    dispatch(actionAddTextSuccess(obj.data.createTexting));
  }

  const onClickAdd = () => {
    obj.addTodo({
      variables: {
        content: "Hello",
        roomID: 0,
      },
    });
  };

  return (
    <div>
      {textState.length > 0
        ? textState.map((record, index) => {
            return (
              <p key={index}>
                {record.content} - {record.roomID}
              </p>
            );
          })
        : ""}
      {obj.loading ? <div>Adding...</div> : ""}
      {obj.error ? <div>{obj.error.message}</div> : ""}
      <button onClick={() => onClickAdd()}>Add</button>
    </div>
  );
}

export default Text;
*/
