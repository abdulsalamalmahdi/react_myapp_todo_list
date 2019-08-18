import React, {Component} from 'react';
import TodoList from './TodoList';
import AddForm from './add_list_item';

class App extends Component {

    state = {
        todos: [
            // {task: "dkfkd", deadline: "null",},
            // {task: "dkfkd",deadline: "null",},
            // {task: "dkfkd",deadline: "null",},
            // {task: "dkfkd",deadline: "null"}
        ]
    }
    addTodoItem = (item) => {
        // console.log(item.length);
        item.id = Math.random(); // GOOD trick with the random
        item.checked = true;
        let todos = [...this.state.todos, item];
        this.setState({
            todos: todos
        });
    }

    toggleDone = (todo) => {
        let todos = [...this.state.todos];
        todos = todos.map(item => {
            if (item.id === todo.id) {
                item.checked = !item.checked;
            }

            return item;
        });
        this.setState({
            todos: todos
        });
    };

    deleteItem = (todo) => {
        let todos = [...this.state.todos];
        todos = todos.filter(item => item.id !== todo.id);
        this.setState({
            todos: todos
        });
    };

    render() {
        return (
            <div className="App">
                <h1>My firt react app</h1>
                <p>Welcome My Neggas</p>
                <TodoList deleteItem={this.deleteItem} toggleDone={this.toggleDone} todos={this.state.todos}/>
                <AddForm addTodoItem={this.addTodoItem}/>

            </div>
        );
    }
}

export default App;
