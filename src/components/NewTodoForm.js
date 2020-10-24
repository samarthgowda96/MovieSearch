import React,{useState} from 'react';
function NewTodoForm(){
    const [inputValue, setInputvalue]= useState('');
    return(
    <div className='form'>
        <input className= 'input' 
        type='text' 
        value={inputValue}
        onchange={e => setInputvalue(e.target.value)} 
        placeholder="type"/>
        <button className='cbutton'>Create Todo</button>
    </div>
    )
}

export default NewTodoForm;