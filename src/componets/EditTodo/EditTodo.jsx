import React, {useState} from 'react';
import './EditTodo.css';

const EditTodo = (props) => {
    let [item, setItem] = useState(props.editTodo)

    function handleEditInput(e){
        let newObj = {...item}
        newObj.name = e.target.value
        setItem(newObj)
    }
    function handleEditInput1(e){
        let newObj = {...item}
        newObj.lastName = e.target.value
        setItem(newObj)
    }
    function handleEditInput2(e){
        let newObj = {...item}
        newObj.number = e.target.value
        setItem(newObj)
    }
    function handleEditInput3(e){
        let newObj = {...item}
        newObj.email = e.target.value
        setItem(newObj)
    }
    function handleSave(){
        props.handleSaveTask(item)
    }
    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input onChange={handleEditInput} type="text" value={item.name} placeholder="name" className="inp-edit"/>

                <input onChange={handleEditInput1} type="text" value={item.lastName} placeholder="lastname" className="inp-edit"/>

                <input onChange={handleEditInput2} type="text" value={item.number} placeholder="number" className="inp-edit"/>

                <input onChange={handleEditInput3} type="text" value={item.email} placeholder="email" className="inp-edit"/>
                <button onClick={handleSave} >save</button>
            </div>
        </div>
    );
};

export default EditTodo;