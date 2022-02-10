import { Button } from 'bootstrap';
import React from 'react';
import './TodoList.css';

const TodoList = (props) => {

   

    return (
<>
                {
                    props.todos.map((item, index)=>(
                        <ul>

                            <li>{item.name}</li>
                            <li>{item.lastName}</li>
                            <li>{item.number}</li>
                            <li>{item.email}</li>
                                <button onClick={()=>props.handleDelete(item.id)}>Delete</button>
                                <button onClick={()=> props.handleEdit(index)}>Edit</button>
                            
                            
                        </ul>

                    ))
                }
            </>
)

};

export default TodoList;