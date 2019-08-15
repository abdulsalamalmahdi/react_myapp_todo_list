import React from 'react';

const ListItem = ({todos}, props) => {
     console.log(todos);
    const todosList = todos.map( todo => {
        return(
            <li key={todo.id} className ="anything"><input type= "checkbox" onClick={props.deleteItem}></input><span> {todo.task} {todo.deadline}</span></li>
        );
    });


    return(
        <div className= "todo-list">
            {todosList}
        </div>
    );
};



export default ListItem;
