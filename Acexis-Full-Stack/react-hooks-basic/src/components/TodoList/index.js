import React, { useState } from "react";
//import PropTypes from 'prop-types';
import ToDoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import Search from "./Search";

TodoList.propTypes = {};

const TODO_LIST = [
  { id: 0, title: "C" },
  { id: 1, title: "React" },
  { id: 2, title: "Vue" },
  { id: 3, title: "Angular" },
  { id: 4, title: "Next" },
  { id: 5, title: "Java" },
  { id: 6, title: "Python" },
];

function TodoList(props) {
  //console.log("Render Todo List");
  const [todoList, setTodoList] = useState([...TODO_LIST]);
  const deleteItem = (id) => {
    let newTodoList = [...todoList];
    setTodoList(newTodoList.filter((todo) => todo.id !== id));
  };
  const addTodo = (params) => {
    let newTodoList = [...todoList];
    newTodoList.push({
      id:
        (newTodoList[newTodoList.length - 1]
          ? newTodoList[newTodoList.length - 1].id
          : -1) + 1,
      ...params,
    });
    setTodoList(newTodoList);
  };
  const onFilterTodo = (filter) => {
    if (filter === "") {
      setTodoList([...TODO_LIST]);
      return;
    }
    let newTodoList = [...todoList];
    newTodoList = newTodoList.filter((todo) =>
      todo.title.toLowerCase().includes(filter.toLowerCase())
    );
    setTodoList(newTodoList);
  };
  return (
    <div>
      <AddTodo title={addTodo} />
      <Search onFilter={onFilterTodo} />
      {todoList.map((todo, index) => {
        return (
          <ToDoItem
            key={index}
            id={todo.id}
            title={todo.title}
            idDelete={deleteItem}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
