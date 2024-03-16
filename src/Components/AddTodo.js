import { useState, useRef, useEffect } from "react";

export default function AddTodo({ addTodo, dispatch }) {
  // useState for checking the state of the input.
  const [todo, setTodo] = useState("");
  const ref = useRef(null);

  // useRef and useEffect for focusing on the input field when the page is loaded.
  useEffect(() => {
    ref.current.focus();
  }, []);

  // submitTodo arrow function for adding the TODO in the list.
  const submitTodo = (e) => {
    // Using preventDefault to stop the reloading on the page every time the form is submited,
    // because it will re-render the page and it will be empty as the default value for useState is empty string.
    e.preventDefault();

    if (todo) {
      dispatch({ type: "ADD_TODO", text: todo });
      setTodo("");
    } else {
      alert("Input cannot be empty. Please enter your next TO-DO!");
    }
  };

  // Using inputChange arrow function to take the event object as argument, user input in this case
  // and set new state of the todo.
  const inputChange = (e) => {
    setTodo(e.target.value);
  };

  // clearAllTodos arrow function for clearing the list of TODOs.
  const clearAllTodos = () => {
    dispatch({ type: "CLEAR_ALL_TODOS" });
  };

  return (
    <div>
      <input type="text" value={todo} onChange={inputChange} ref={ref} />
      <button onClick={submitTodo}>Add</button>
      <button onClick={clearAllTodos}>Clear All</button>
    </div>
  );
}
