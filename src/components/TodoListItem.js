import React from 'react';

function TodoListItem({todo}){
    return(
        <div className='container'>
            <h3>{todo.text}</h3>
            <div>
                <button className='Cbutton'>Mark as Completed</button>
                <button className='Rbutton'>Remove</button>
            </div>



        </div>
    )

}

export default TodoListItem;