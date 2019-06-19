import React, { Component } from 'react';
import logo from './logo.svg';
import Todo from "./components/Todo.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "todo-box">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    );
  }
}

export default App;
