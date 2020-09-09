import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [flteredTodos, setFilteredTodos] = useState([]);
  // RUn Once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  };

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={flteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
