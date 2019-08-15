import React, { Component } from 'react';
import ListItem from './list_item';
import AddForm from './add_list_item';
import DeleteButton from './deleteButton';
 './deleteButton';


class App extends Component {
 
   state = { 
    todos : [
      // {task: "dkfkd", deadline: "null",}, 
      // {task: "dkfkd",deadline: "null",},
      // {task: "dkfkd",deadline: "null",},
      // {task: "dkfkd",deadline: "null"}
            ]
            }
    addTodoItem = (item) => {
      // console.log(item.length);
      item.id = Math.random();
      item.checked = true;
      let todos = [...this.state.todos, item]
      this.setState({
      todos: todos
      });
      console.log(item.checked);
      console.log(this.state.todos)
    }

    deleteItem = (e) => {
      let todos = [...this.state.todos]
      todos.checked=!this.state.checked
     todos= todos.filter( item => item.checked !== false);
      this.setState({
           todos : todos
      });
    }
    
  render() {
    return (
      <div className="App">
        <h1>My firt react app</h1>
        <p>Welcome My Neggas</p>
        <ListItem ref="theItem" deleteItem= {this.deleteItem} todos={this.state.todos} />
        <AddForm addTodoItem= {this.addTodoItem} />
        <DeleteButton  deleteItem= {this.deleteItem} ListItem={this.ListItem} />

      </div>
    );
  }
}

export default App;
