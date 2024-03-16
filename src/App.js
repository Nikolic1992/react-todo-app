import { useReducer } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";

let idCounter = 0;

// tasksReducer function will be called every time we call the dispatch function and it will change the state of the component.
// It takes tasks as current state and action - type is taken from AddTodo and TodoItem components.
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: idCounter++,
        completed: false,
        text: action.text,
      };
      return [...tasks, newTodo];
    case "EDIT_TEXT":
      return tasks.map((currentTodo) =>
        currentTodo.id === action.taskId
          ? { ...currentTodo, text: action.newText }
          : currentTodo
      );
    case "DONE_TODO":
      return tasks.map((currentTodo) =>
        currentTodo.id === action.taskId
          ? { ...currentTodo, completed: !currentTodo.completed }
          : currentTodo
      );
    case "DELETE_TODO":
      return tasks.filter((currentTodo) => currentTodo.id !== action.taskId);
    case "CLEAR_ALL_TODOS":
      return [];
    default:
      return tasks;
  }
}

function App() {
  const [todos, dispatch] = useReducer(tasksReducer, []);
  return (
    <div>
      <h1>TODO List</h1>
      <AddTodo dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
