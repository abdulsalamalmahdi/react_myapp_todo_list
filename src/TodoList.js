import React from 'react';

// Renamed this from List item
// Because this is not a single item it represents a list of todo's
const TodoList = ({todos}, props) => {
    console.log(todos);
    const todosList = todos.map(todo => {
        return (
            <li key={todo.id} className="anything"><input type="checkbox"
                                                          onClick={props.deleteItem}></input><span> {todo.task} {todo.deadline}</span>
            </li>
        );
    });


    return (
        <div className="todo-list">
            {todosList}
        </div>
    );
};


export default TodoList;
