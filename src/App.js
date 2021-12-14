import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';


// function Todo() {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: ''
//   });

//   const submitUpdate = value => {
//     updateTodo(edit.id, value);
//     setEdit({
//       id: null,
//       value: ''
//     });
//   };

//   if (edit.id) {
//     return <TodoForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return todos.map((todo, index) => (
//     <div
//       className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
//       key={index}
//     >
//       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//         {todo.text}
//       </div>
//       <div className='icons'>
//         <RiCloseCircleLine
//           onClick={() => removeTodo(todo.id)}
//           className='delete-icon'
//         />
//         <TiEdit
//           onClick={() => setEdit({ id: todo.id, value: todo.text })}
//           className='edit-icon'
//         />
//       </div>
//     </div>
//   ));
// };


function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }
    const newTodos = [todo]
    setTodos(newTodos)

    console.log(todo, ...todos)


  }

  return(
    <>
      <TodoForm onSubmit={addTodo}/>
    </>
  );

}

function TodoForm(props) {
  const [input, setInput] = useState('')


  const handleSumbit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
  
    setInput('')
  }

  return (
    <div>
      <header>
        <p id="title" onClick={() => {window.location.reload()}}>React TODO</p>
        <form onSubmit={handleSumbit}>
          <input type="text" placeholder="What will to do today" value={input} onChange={e => setInput(e.target.value)}></input>
          <button>Add Todo</button>
        </form>
      </header>
    </div>
  );
}

function App() {
  return(
    <div className="App-header">
      <TodoList />
    </div>
  );
}

export default App;
