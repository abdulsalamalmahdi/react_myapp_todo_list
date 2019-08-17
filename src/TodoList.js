import React from 'react';
import DeleteButton from "./deleteButton";

// Renamed this from List item
// Because this is not a single item it represents a list of todo's
// You also had a mistake here in using the arguments
// When the TodoList function is called it is passed the props as a single parameter
// Internally this will look something like TodoList(props)
// So no second argument the trick you were probably looking for is the one like below
const TodoList = ({todos, ...props}) => {
    const todosList = todos.map(todo => {
        return (
            <li key={todo.id} className="anything">
                <input checked={todo.checked} type="checkbox" onClick={() => {
                    props.toggleDone(todo);
                }} />
                <span> {todo.task} {todo.deadline}</span>
                <DeleteButton deleteItem={() => {
                    props.deleteItem(todo);
                }}/>
            </li>
        );
    });


    return (
        <div className="todo-list">
            {/*The li's should be wrapped in an ul or it is not valid HTML markup*/}
            <ul>
                {todosList}
            </ul>
        </div>
    );
};


export default TodoList;
