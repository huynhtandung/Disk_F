import React from "react";
import { useSelector } from "react-redux";
import List from "../components/List";
import AddList from "../components/AddList";

ListPage.propTypes = {};

function ListPage(props) {
  const list = useSelector((state) => state);
  return (
    <div>
      <AddList />
      {list.map((language, index) => {
        return <List key={index} language={language} />;
      })}
    </div>
  );
}
export default ListPage;
