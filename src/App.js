import React, { Component } from 'react'
import Todo from "./components/Todo.js"
import todoData from "./components/todoData.js"
import './App.css'

class App extends Component {
  render() {
    const todoComponent = todoData.map(() => {

    })

    return (
      <div className = "todo-box">
        {todoComponent}
      </div>
    );
  }
}

export default App;
