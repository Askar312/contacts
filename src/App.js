import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BgColor from './componets/BgColor/BgColor';
import AddTodo from './componets/AddTodo/AddTodo';
import TodoList from './componets/TodoList/TodoList';
import EditTodo from './componets/EditTodo/EditTodo';
import { useState } from 'react';



function App() {
  let [todos, setTodos] = useState([]);
  let [modal, setModal] = useState(false)
  let [editTodo, setEditTodo] = useState({});

  function handleTask (newObj){
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos)
  }

  // ! function to make line through
  function changeStatus(id){
    const newTodos = todos.map((item)=>{
      if(item.id === id){
        item.status = !item.status;
      }return item;
    });
    setTodos(newTodos);
  }

  function handleDelete(id){
    let newTodos = todos.filter(item =>{
      return item.id !== id
    })
    setTodos(newTodos)
  }

  function handleEdit(index){
    setModal(true)
    setEditTodo(todos[index])
  }

  function handleSaveTask(newTask){
    const newTodos = todos.map((item)=>{
      if(item.id === newTask.id){
        return newTask;
      }
      return item;
    });
    setTodos(newTodos);
    setModal(false)
  }

  return (
  <>

    <AddTodo handleTask={handleTask}/>
    <TodoList todos={todos} changeStatus={changeStatus}
    handleDelete={handleDelete}
    handleEdit={handleEdit}
    />
    {modal ?<EditTodo
    editTodo={editTodo}
    handleSaveTask={handleSaveTask}
    />
    : null }
    
    
  </>

  );
}

export default App;
