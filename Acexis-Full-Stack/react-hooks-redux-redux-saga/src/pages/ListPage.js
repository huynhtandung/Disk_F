import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "../components/List";
import AddList from "../components/AddList";
import { actionGetList } from "../actions/index";

ListPage.propTypes = {};

function ListPage(props) {
  console.log("Page List render...");
  const list = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Fetch api...");
    dispatch(actionGetList());
  }, [dispatch]);
  return (
    <div>
      <AddList />
      {list.map((item, index) => {
        return <List key={index} language={item.language} />;
      })}
    </div>
  );
}
export default ListPage;
