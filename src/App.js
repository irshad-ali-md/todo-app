import React, { Component } from 'react';
import './App.css';
import List from './List/List';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      inputValue: '',
      items: []
    }
  }
  
  inputChangedHandler = (event) => {
    this.setState({inputValue: event.target.value});
  }

  addTaskHandler = (event) => {
    event.preventDefault();
    let newArr = this.state.items;
    newArr.push(this.state.inputValue);
    this.setState({
      inputValue: '',
      items: newArr
    });
  }
  
  deleteTaskHandler = (name) => {
    let newItems = this.state.items.filter((el, elIndex) => elIndex !== name);
    this.setState({items: newItems});
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
          <form onSubmit={this.addTaskHandler}>
            <input
             onChange={this.inputChangedHandler} 
             value={this.state.inputValue} 
             placeholder="enter task"
             autoFocus />
            <button className="Button">Add</button>
          </form>
          <List items={this.state.items} delete={this.deleteTaskHandler} />
      </div>
    );
  }
}
