import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoListPage from "./pages/TodoListPage";
import calculator from "./pages/calculator";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/TodoList' exact component={TodoListPage} />
          <Route path='/calculator' component={calculator} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
