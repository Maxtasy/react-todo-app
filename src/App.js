import React, { Component } from 'react';
import Header from "./components/layout/Header.js";
import AddTodo from "./components/todos/AddTodo.js";
import Todos from "./components/todos/Todos.js";
import { v4 as uuidv4 } from "uuid";

import './App.css';

class App extends Component {
  state = {
    currentId: 4,
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Dinner with wife",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Meeting with boss",
        completed: false
      }
    ]
  }

  // Toggle Complete
  toggleComplete = id => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  // Delete Item
  deleteItem = id => {
    this.setState({ todos: this.state.todos.filter(todo => (todo.id !== id)) });
  }
  
  // Add new Item
  addTodo = title => {
    const newTodo = {
      id: uuidv4(), 
      title, 
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
