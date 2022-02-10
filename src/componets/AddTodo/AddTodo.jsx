import React, { useState } from 'react';

const AddTodo = (props) => {

    const[task, setTask] = useState('');

    let [name, setName] = useState('');
    let [lastName, setLastName] = useState('');
    let [number, setNumber] = useState('');
    let [email, setEmail] = useState('');


    const handleAdd = () => {
        const newTask = {
            name,
            lastName,
            number,
            email,
            id: Date.now(),
        };
        
        props.handleTask(newTask)
        setTask('')

    };

    return (
        <div>
            <input onChange={(e)=>setName(e.target.value)}
            placeholder='Name'/>
            <input onChange={(e)=>setLastName(e.target.value)}
            placeholder='Last Name'/>
            <input onChange={(e)=>setNumber(e.target.value)} placeholder='Number'/>
            <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTodo;
