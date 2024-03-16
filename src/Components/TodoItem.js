import { useState } from "react";

// TodoItem function is used to check the state of the added todo and to give the user a certain functionality with it.
// It can mark todo as DONE, DELETE todo or EDIT todo.
export default function TodoItem({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(true);

  const handleExitEditing = () => setIsEditing(false);

  function handleCheckboxChange() {
    dispatch({ type: "DONE_TODO", taskId: todo.id });
  }

  function handleTodoDelete(task) {
    dispatch({ type: "DELETE_TODO", taskId: todo.id });
  }

  function handleEditTextChange(e) {
    dispatch({ type: "EDIT_TEXT", taskId: todo.id, newText: e.target.value });
  }

  return (
    <li className="list">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={todo.text}
            onChange={handleEditTextChange}
          />
          <button onClick={handleExitEditing}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: todo.completed,
          }}
        >
          {todo.text}
        </span>
      )}
      {/* This part of the code checks two conditions: whether the item is not in editing mode and whether the item is not marked as completed, and displays the corresponding button only if both conditions are true.*/}
      {!isEditing && !todo.completed && (
        <button onClick={handleEditClick}>Edit</button>
      )}
      {!isEditing && <button onClick={handleTodoDelete}>Delete</button>}
    </li>
  );
}
