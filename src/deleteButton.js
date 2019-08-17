import React from 'react';

const DeleteButton = (props) => {
    return (
        <button onClick={props.deleteItem}>delete</button>
    );

}

export default DeleteButton