import React, { useReducer, useState } from "react";

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
        return [...state, {id:Date.now(), text: action.text, completed: false}];
    case "TOGGLE_TODO":
      return state.map((todo)=>(
        todo.id===action.id? {...todo, completed: !todo.completed} : todo
      ));
    case "CLEAR_COMPLETED":
      return state.filter((todo)=>!todo.completed);
    default:
      return state;
  }
}

function ToDo17() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  // console.log(todos)
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({type:"ADD_TODO", text:newTodo})
      setNewTodo("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {
        todos.map((todo)=>(
            <li key={todo.id}>
                <input
                type="checkbox"
                style={{height:"0px",width:"0px" }}
                id={todo.id}
                checked = {todo.completed}
                onChange={()=> dispatch({type: "TOGGLE_TODO", id: todo.id})}
                />
                <label style={{textDecoration: todo.completed? "line-through": "none"}} for={todo.id}>
                  {todo.text}
                </label>
            </li>
        ))
        }
        </ul>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
}

export default ToDo17;


//component ; form + useState; reducrer; handleSubmit(); . map normal and check list is created or not ; change map method with input and lable + add completed in add;
// check its working // add Clear button nd dispatch 