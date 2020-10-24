import React from 'react';
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

const TodoList = ({todos=[{text: "hello"}]}) =>(
    <div className='list'>
    <NewTodoForm/>
    {todos.map(todo=> <TodoListItem todo={todo}/>)}
    </div>
);

export default TodoList;